// Generator nomor pesanan: HQ-YYYYMMDD + 6 karakter alfanumerik acak (tanggal WIB).
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;

export function generateOrderId(now = Date.now()) {
    const d = new Date(now + WIB_OFFSET_MS);
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(d.getUTCDate()).padStart(2, '0');
    const bytes = new Uint8Array(6);
    crypto.getRandomValues(bytes);
    let rand = '';
    for (let i = 0; i < bytes.length; i++) rand += ALPHABET[bytes[i] % ALPHABET.length];
    return `HQ-${yyyy}${mm}${dd}${rand}`;
}
