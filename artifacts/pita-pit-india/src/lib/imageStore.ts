const PREFIX = 'pitapit_img_';

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function getImageOverride(key: string): string | null {
  try {
    return localStorage.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

export function setImageOverride(key: string, dataUrl: string): void {
  try {
    localStorage.setItem(PREFIX + key, dataUrl);
  } catch {
    throw new Error('Image could not be saved — try a smaller or more compressed file (under 1 MB).');
  }
}

export function removeImageOverride(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {}
}

export function getAllOverrideKeys(): string[] {
  try {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith(PREFIX)) keys.push(k.slice(PREFIX.length));
    }
    return keys;
  } catch {
    return [];
  }
}
