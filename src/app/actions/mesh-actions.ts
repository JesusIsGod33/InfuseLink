'use server';

import { writeLocalLog } from '@/lib/local-state';
import { revalidatePath } from 'next/cache';

export async function dispatchMandate(mandateId: string, customMsg?: string) {
  const identifier = customMsg ? 'OPERATOR' : mandateId;
  const commandText = customMsg || `EXECUTE_${mandateId}`;

  // Physically record the action to the sandbox filesystem array
  await writeLocalLog(identifier, commandText, 'COMMAND');

  // Automatically instruct Next.js to reload data layouts
  revalidatePath('/operations');

  return { success: true };
}
