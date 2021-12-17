for(let i = 0; i <= 1000000; i++) {
  const text = new TextEncoder().encode(`${i}ok\r`);
  Deno.stdout.writeSync(text);
}