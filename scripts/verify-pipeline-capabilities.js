#!/usr/bin/env node

/**
 * Pipeline Verification Suite
 * 
 * This script validates that all core development environment capabilities
 * are functional: network tools, file I/O, git operations, and npm builds.
 * 
 * **IMPORTANT**: This is LOCAL-ONLY diagnostic tooling.
 * Run this in your development environment to verify setup.
 * 
 * Usage:
 *   node scripts/verify-pipeline-capabilities.js
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ============================================================================
// Configuration
// ============================================================================

const WORKSPACE_ROOT = process.cwd();
const TEST_TIMEOUT = 10000;
const VERBOSE = process.argv.includes('--verbose');

const tests = [];
let passedCount = 0;
let failedCount = 0;

// ============================================================================
// Logging Utilities
// ============================================================================

function log(level, message) {
  const timestamp = new Date().toISOString();
  const symbols = {
    INFO: 'ℹ',
    PASS: '✓',
    FAIL: '✗',
    WARN: '⚠',
  };

  const prefix = `[${timestamp}] ${symbols[level] || '•'}`;
  console.log(`${prefix} ${level}: ${message}`);
}

function verbose(message) {
  if (VERBOSE) {
    console.log(`  └─ ${message}`);
  }
}

// ============================================================================
// Test Runner
// ============================================================================

function registerTest(title, binary, args, opts = {}) {
  tests.push({ title, binary, args, opts });
}

function runTest(test) {
  const { title, binary, args, opts } = test;

  log('INFO', `Testing: ${title}`);
  verbose(`Command: ${binary} ${args.join(' ')}`);

  try {
    const result = spawnSync(binary, args, {
      timeout: TEST_TIMEOUT,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
      ...opts,
    });

    if (result.error) {
      log('FAIL', `${title} — Error: ${result.error.message}`);
      failedCount++;
      return false;
    }

    if (result.status === 0) {
      log('PASS', `${title}`);
      if (result.stdout && VERBOSE) {
        verbose(`Output: ${result.stdout.trim().slice(0, 100)}...`);
      }
      passedCount++;
      return true;
    } else {
      log('FAIL', `${title} — Exit code: ${result.status}`);
      if (result.stderr && VERBOSE) {
        verbose(`Error: ${result.stderr.trim().slice(0, 100)}`);
      }
      failedCount++;
      return false;
    }
  } catch (error) {
    log('FAIL', `${title} — Exception: ${error.message}`);
    failedCount++;
    return false;
  }
}

// ============================================================================
// File I/O Tests
// ============================================================================

function testFileIO() {
  log('INFO', '=== FILE I/O TESTS ===');

  const testFile = path.join(WORKSPACE_ROOT, 'data', '.pipeline_test_marker');

  try {
    // Create directory
    fs.mkdirSync(path.dirname(testFile), { recursive: true });
    log('PASS', 'Directory creation test');
    passedCount++;

    // Write file
    fs.writeFileSync(testFile, 'PIPELINE_VERIFICATION_SUCCESS', 'utf8');
    log('PASS', 'File write test');
    passedCount++;

    // Read file
    const content = fs.readFileSync(testFile, 'utf8');
    if (content === 'PIPELINE_VERIFICATION_SUCCESS') {
      log('PASS', 'File read test');
      passedCount++;
    } else {
      log('FAIL', 'File read test — content mismatch');
      failedCount++;
    }

    // Delete file
    fs.unlinkSync(testFile);
    log('PASS', 'File deletion test');
    passedCount++;
  } catch (error) {
    log('FAIL', `File I/O test — ${error.message}`);
    failedCount++;
  }
}

// ============================================================================
// Network & System Tests
// ============================================================================

function testNetworkTools() {
  log('INFO', '=== NETWORK & SYSTEM TOOLS ===');

  registerTest('Network interface inspection', 'ip', ['route', 'show']);
  registerTest('Local hostname resolution', 'getent', ['hosts', 'localhost']);
  registerTest('System clock', 'date', []);
  registerTest('Process count', 'nproc', []);
  registerTest('Disk usage', 'df', ['-h', '/']);
  registerTest('Memory status', 'free', ['-m']);
  registerTest('Network connectivity (Google DNS)', 'ping', ['-c', '1', '-W', '2', '8.8.8.8']);
}

// ============================================================================
// Development Tools Tests
// ============================================================================

function testDevTools() {
  log('INFO', '=== DEVELOPMENT TOOLS ===');

  registerTest('Node.js version', 'node', ['--version']);
  registerTest('NPM version', 'npm', ['--version']);
  registerTest('Git version', 'git', ['--version']);
  registerTest('Git config (user.name)', 'git', ['config', 'user.name']);
  registerTest('TypeScript compiler', 'npx', ['tsc', '--version']);
}

// ============================================================================
// Build & Compilation Tests
// ============================================================================

function testBuildCapabilities() {
  log('INFO', '=== BUILD & COMPILATION TESTS ===');

  log('INFO', 'Testing: npm install integrity');
  const nodeModulesExists = fs.existsSync(path.join(WORKSPACE_ROOT, 'node_modules'));
  if (nodeModulesExists) {
    log('PASS', 'npm install integrity');
    passedCount++;
  } else {
    log('WARN', 'node_modules not found — run npm install first');
    failedCount++;
  }

  registerTest('ESLint check', 'npm', ['run', 'lint'], { timeout: 30000 });
  registerTest('TypeScript build', 'npm', ['run', 'build'], { timeout: 45000 });
}

// ============================================================================
// Main Execution
// ============================================================================

function main() {
  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║     INFUSELINK PIPELINE VERIFICATION SUITE             ║');
  console.log('╚═══════════════════════════════════════════════════════╝\n');

  log('INFO', `Workspace root: ${WORKSPACE_ROOT}`);
  log('INFO', `Node environment: ${process.env.NODE_ENV || 'development'}`);
  log('INFO', `Verbose mode: ${VERBOSE ? 'enabled' : 'disabled'}\n`);

  // Run all test categories
  testFileIO();
  console.log();

  testNetworkTools();
  tests.forEach(runTest);
  tests.length = 0; // Reset for next category
  console.log();

  testDevTools();
  tests.forEach(runTest);
  tests.length = 0;
  console.log();

  testBuildCapabilities();
  tests.forEach(runTest);
  console.log();

  // Summary
  const totalTests = passedCount + failedCount;
  const passPercentage = ((passedCount / totalTests) * 100).toFixed(1);

  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log(`║ RESULTS: ${passedCount}/${totalTests} passed (${passPercentage}%)`.padEnd(56) + '║');
  console.log('╚═══════════════════════════════════════════════════════╝\n');

  if (failedCount === 0) {
    log('INFO', 'All pipeline capabilities verified! ✨ Ready for development.');
    process.exit(0);
  } else {
    log('WARN', `${failedCount} test(s) failed. Review output above.`);
    process.exit(1);
  }
}

// ============================================================================
// Entry Point
// ============================================================================

main();
