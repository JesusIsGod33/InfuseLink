import fs from 'fs';
import path from 'path';

const CONFIG_FILE_PATH = path.join(process.cwd(), 'data', 'runtime_config.json');

export interface RuntimeConfig {
  gatewayTimeoutMs: number;
  environmentTarget: string;
  allowedWorkingDirectories: string[];
  activeModelString: string;
  lastModified: string;
}

const DEFAULT_CONFIG: RuntimeConfig = {
  gatewayTimeoutMs: 5000,
  environmentTarget: 'LOCAL_SANDBOX',
  allowedWorkingDirectories: ['./data', './src/app', './src/components'],
  activeModelString: 'default',
  lastModified: new Date().toISOString(),
};

function ensureConfigExists() {
  const dir = path.dirname(CONFIG_FILE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(CONFIG_FILE_PATH)) {
    fs.writeFileSync(CONFIG_FILE_PATH, JSON.stringify(DEFAULT_CONFIG, null, 2), 'utf-8');
  }
}

export function readConfigFromDisk(): RuntimeConfig {
  ensureConfigExists();
  try {
    const content = fs.readFileSync(CONFIG_FILE_PATH, 'utf-8');
    return { ...DEFAULT_CONFIG, ...JSON.parse(content) };
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

export function writeConfigToDisk(partial: Partial<RuntimeConfig>) {
  ensureConfigExists();
  const current = readConfigFromDisk();
  const updated: RuntimeConfig = {
    ...current,
    ...partial,
    lastModified: new Date().toISOString(),
  };
  fs.writeFileSync(CONFIG_FILE_PATH, JSON.stringify(updated, null, 2), 'utf-8');
  return updated;
}
