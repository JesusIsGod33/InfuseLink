'use server';

import { writeLocalLog } from '@/lib/local-state';
import { revalidatePath } from 'next/cache';

export async function submitAgentDirective(userMessage: string) {
  const cleanMessage = userMessage.trim();
  if (!cleanMessage) return { success: false };

  await writeLocalLog('OPERATOR', `AGENT_PROMPT:_"${cleanMessage}"`, 'COMMAND');

  try {
    const agentAck = 'ACKNOWLEDGEMENT:_INGESTED_FILE_UPDATE_INSTRUCTION._PARSING_MODIFICATIONS_FOR_WORKSPACE_SYNCHRONIZATION_LOOP';
    await writeLocalLog('MESH_AGENT', agentAck, 'NETWORK_SIGNAL');
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    await writeLocalLog('SYSTEM_FAULT', `AGENT_PARSING_ERROR:_${errorMsg.toUpperCase()}`, 'ERROR');
  }

  revalidatePath('/operations');
  return { success: true };
}
