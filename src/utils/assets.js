const imageModules = import.meta.glob('../assets/images/**/*', { eager: true, import: 'default' });

export function getImageUrl(relativePath) {
  const normalized = relativePath.replace(/^([./])+/, '');
  const key = `../assets/images/${normalized}`;
  const asset = imageModules[key];

  if (!asset) {
    console.warn(`Image not found: ${relativePath}`);
    return '';
  }

  return asset;
}
