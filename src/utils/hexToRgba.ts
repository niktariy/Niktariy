export function hexToRgba(hex: string, alpha: number): string {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    // @ts-expect-error - c is converted to number via '0x' prefix
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(' ') + ' / ' + alpha + '%)';
  }
  console.error('Bad Hex');
  return '#000000';
} 