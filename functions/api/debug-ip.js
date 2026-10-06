// SEMENTARA: cek IP keluar (egress) function Cloudflare. HAPUS file ini setelah tes.
// Tidak menampilkan secret apa pun, hanya IP publik server.
export async function onRequestGet() {
    const get = async (u) => {
        try { const r = await fetch(u); return (await r.json()).ip; }
        catch (e) { return 'error: ' + e.message; }
    };
    const out = {
        ipv4_only_service: await get('https://api.ipify.org?format=json'),
        dual_stack_service: await get('https://api64.ipify.org?format=json')
    };
    return new Response(JSON.stringify(out, null, 2), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    });
}
