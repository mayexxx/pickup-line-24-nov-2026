import { mkdirSync, writeFileSync } from 'node:fs';

const line = 'Are you a context window? Because every time I talk to you, I forget everything that came before you.';
if (line.length < 1 || line.length > 200 || /[\r\n]/.test(line)) {
  throw new Error('Entry must be a single line of 1–200 characters');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${line}\n`, 'utf8');
