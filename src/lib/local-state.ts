import fs from 'fs';
import path from 'path';

const STATE_FILE_PATH = path.join(process.cwd(), 'data', 'system_events.json');

export type EventType = 'COMMAND' | 'NETWORK_SIGNAL' | 'ERROR' | 'SYSTEM_UPGRADE';

export interface LocalEvent {
  id: string;
  nodeId: string;
  message: string;
  timestamp: string;
  type: EventType;
}

function initStorage() {
  const dir = path.dirname(STATE_FILE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(STATE_FILE_PATH)) fs.writeFileSync(STATE_FILE_PATH, JSON.stringify([]), 'utf-8');
}

export async function readLocalLogs(): Promise<LocalEvent[]> {
  initStorage();
  try {
    const content = fs.readFileSync(STATE_FILE_PATH, 'utf-8');
    return JSON.parse(content || '[]');
  } catch {
    return [];
  }
}

export async function writeLocalLog(nodeId: string, message: string, type: EventType = 'COMMAND') {
  initStorage();
  try {
    const logs = await readLocalLogs();
    const newEntry: LocalEvent = {
      id: Math.random().toString(36).substring(2, 9),
      nodeId,
      message: message.toUpperCase().replace(/\s+/g, '_'),
      timestamp: new Date().toLocaleTimeString(),
      type
    };
    const updated = [newEntry, ...logs].slice(0, 50);
    fs.writeFileSync(STATE_FILE_PATH, JSON.stringify(updated, null, 2), 'utf-8');
    return newEntry;
  } catch (err) {
    console.error("STATE_WRITE_FAULT:", err);
  }
}
