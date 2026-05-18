import fs from 'fs';
import path from 'path';

// Define a physical file path inside the Devin sandbox storage space
const STATE_FILE_PATH = path.join(process.cwd(), 'data', 'system_events.json');

export interface LocalEvent {
  id: string;
  nodeId: string;
  message: string;
  timestamp: string;
  type?: string;
}

// Ensure the local storage file and data directory exist safely
function initializeStorage() {
  const dir = path.dirname(STATE_FILE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE_PATH)) {
    fs.writeFileSync(STATE_FILE_PATH, JSON.stringify([]), 'utf-8');
  }
}

export async function readLocalLogs(): Promise<LocalEvent[]> {
  initializeStorage();
  try {
    const content = fs.readFileSync(STATE_FILE_PATH, 'utf-8');
    return JSON.parse(content || '[]');
  } catch (error) {
    console.error("STATE_READ_FAULT:", error);
    return [];
  }
}

export async function writeLocalLog(nodeId: string, message: string, type = 'LOG') {
  initializeStorage();
  try {
    const currentLogs = await readLocalLogs();
    const newEntry: LocalEvent = {
      id: Math.random().toString(36).substring(2, 9),
      nodeId,
      message: message.toUpperCase().replace(/\s+/g, '_'),
      timestamp: new Date().toLocaleTimeString(),
      type
    };

    // Prepend to keep latest events at the top of the stream
    const updatedLogs = [newEntry, ...currentLogs].slice(0, 50);
    fs.writeFileSync(STATE_FILE_PATH, JSON.stringify(updatedLogs, null, 2), 'utf-8');
    return newEntry;
  } catch (error) {
    console.error("STATE_WRITE_FAULT:", error);
  }
}
