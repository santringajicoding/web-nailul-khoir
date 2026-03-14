import{s as p}from"./supabase.DomExlJR.js";import"./AdminLayout.astro_astro_type_script_index_1_lang.DYrKiWId.js";async function b(){const{data:{session:a}}=await p.auth.getSession();return a||(window.location.replace("/admin/login"),null)}function f(a){return new Date(a).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}let i=[],c="Semua";const m=()=>{const a=document.getElementById("pendaftarTableBody");if(!a)return;const n=c==="Semua"?i:i.filter(t=>t.jalur===c);if(!n||n.length===0){a.innerHTML='<tr><td colspan="7" class="px-6 py-16 text-center text-gray-500 font-medium text-lg">Tidak ada data pendaftar untuk Program / Filter ini.</td></tr>';return}const s=t=>t==="Diterima"?"bg-green-100 text-green-800 border-green-300":t==="Ditolak"?"bg-red-100 text-red-800 border-red-300":"bg-yellow-50 text-yellow-700 border-yellow-200",d=t=>t==="SMPIT"?"bg-blue-100 text-blue-800 font-bold":t==="SMK"?"bg-orange-100 text-orange-800 font-bold":t==="Pondok Pesantren"?"bg-pesantren text-white font-bold":"bg-gray-100 text-gray-800 font-medium";a.innerHTML=n.map(t=>`
        <tr class="hover:bg-green-50 transition-colors duration-150 group">
          <td class="px-6 py-5 whitespace-nowrap text-sm text-gray-500 font-medium">${f(t.created_at)}</td>
          <td class="px-6 py-5">
            <div class="text-base font-extrabold text-gray-900 mb-1 group-hover:text-pesantren transition-colors">${t.nama_santri}</div>
            <div class="text-xs text-gray-500 line-clamp-2 pr-4 leading-relaxed" title="${t.alamat}">
              <span class="font-bold text-gray-600">Alamat:</span> ${t.alamat}
            </div>
          </td>
          <td class="px-6 py-5 whitespace-nowrap">
            <span class="px-3 py-1.5 text-xs rounded-lg ${d(t.jalur)} shadow-sm border border-transparent">
              ${t.jalur||"Jalur Tidak Diketahui"}
            </span>
          </td>
          <td class="px-6 py-5 whitespace-nowrap text-sm font-bold text-gray-700">${t.nama_wali}</td>
          <td class="px-6 py-5 whitespace-nowrap">
            <a href="https://wa.me/${t.no_hp.replace(/^0/,"62")}" target="_blank" 
               class="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-green-50 text-green-700 hover:bg-green-600 hover:text-white transition-all shadow-sm border border-green-200 hover:border-transparent">
              ${t.no_hp}
            </a>
          </td>
          <td class="px-6 py-5 whitespace-nowrap">
             <span class="px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full border ${s(t.status)}">
              ${t.status}
            </span>
          </td>
          <td class="print-hide px-6 py-5 whitespace-nowrap text-center text-sm font-medium">
            <div class="flex items-center justify-center space-x-2">
              ${t.status!=="Diterima"?`<button data-action="terima" data-id="${t.id}" class="text-white bg-pesantren hover:bg-green-800 px-3 py-1.5 rounded-md text-xs shadow-sm transition-colors" title="Terima Santri">Terima</button>`:""}
              ${t.status!=="Ditolak"?`<button data-action="tolak" data-id="${t.id}" class="text-white bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-md text-xs shadow-sm transition-colors" title="Tolak Status">Tolak</button>`:""}
              <button data-action="hapus" data-id="${t.id}" data-name="${t.nama_santri}" class="text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1.5 rounded-md transition-colors" title="Hapus Data">
                Hapus
              </button>
            </div>
          </td>
        </tr>
      `).join("")},u=async()=>{if(!await b())return;const n=document.getElementById("pendaftarTableBody");n&&(n.innerHTML='<tr><td colspan="7" class="px-6 py-10 text-center text-gray-500"><svg class="animate-spin mx-auto h-8 w-8 text-pesantren mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Memuat data...</td></tr>');const{data:s,error:d}=await p.from("pendaftaran").select("*").order("created_at",{ascending:!1});if(d){console.error("Database Error:",d),n&&(n.innerHTML=`<tr><td colspan="7" class="px-6 py-8 text-center text-red-600 font-bold bg-red-50">Gagal memuat data: ${d.message}</td></tr>`);return}i=s||[],m();const t=document.getElementById("statTotal"),l=document.getElementById("statSMP"),r=document.getElementById("statSMK"),e=document.getElementById("statPondok");t&&(t.textContent=i.length.toString()),l&&(l.textContent=i.filter(o=>o.jalur==="SMPIT").length.toString()),r&&(r.textContent=i.filter(o=>o.jalur==="SMK").length.toString()),e&&(e.textContent=i.filter(o=>o.jalur==="Pondok Pesantren").length.toString())},g=async(a,n)=>{const{error:s}=await p.from("pendaftaran").update({status:n}).eq("id",a);s?alert("Gagal memperbarui status: "+s.message):u()},h=async(a,n)=>{if(confirm(`Yakin ingin menghapus data calon santri secara permanen bernama: ${n}?`)){const{error:s}=await p.from("pendaftaran").delete().eq("id",a);s?alert("Gagal menghapus data: "+s.message):u()}},y=()=>{const a=c==="Semua"?i:i.filter(e=>e.jalur===c);if(a.length===0){alert("Tidak ada data untuk diekspor!");return}const s=[["Waktu_Daftar","Nama_Santri","Program_Jalur","Nama_Wali","No_WhatsApp","Alamat","Status"].join(",")];a.forEach(e=>{const o=[`"${new Date(e.created_at).toLocaleString("id-ID")}"`,`"${e.nama_santri}"`,`"${e.jalur||"Tidak Diketahui"}"`,`"${e.nama_wali}"`,`"${e.no_hp}"`,`"${e.alamat.replace(/\n/g," ")}"`,`"${e.status}"`];s.push(o.join(","))});const d=s.join(`
`),t=new Blob([d],{type:"text/csv"}),l=window.URL.createObjectURL(t),r=document.createElement("a");r.setAttribute("hidden",""),r.setAttribute("href",l),r.setAttribute("download",`Laporan_Pendaftar_${c.replace(/\s+/g,"_")}_${new Date().toISOString().split("T")[0]}.csv`),document.body.appendChild(r),r.click(),document.body.removeChild(r)};document.addEventListener("DOMContentLoaded",()=>{u();const a=document.querySelectorAll(".tab-btn");a.forEach(l=>{l.addEventListener("click",r=>{a.forEach(o=>{o.classList.remove("bg-pesantren","text-white"),o.classList.add("bg-white","text-gray-700")});const e=r.target;e.classList.remove("bg-white","text-gray-700"),e.classList.add("bg-pesantren","text-white"),c=e.getAttribute("data-filter")||"Semua",m()})});const n=document.getElementById("btnRefresh");n&&n.addEventListener("click",u);const s=document.getElementById("btnExportCSV");s&&s.addEventListener("click",y);const d=document.getElementById("btnExportPDF");d&&d.addEventListener("click",()=>{window.print()});const t=document.getElementById("pendaftarTableBody");t&&t.addEventListener("click",l=>{const r=l.target.closest("button");if(!r)return;const e=r.getAttribute("data-action"),o=r.getAttribute("data-id"),x=r.getAttribute("data-name");o&&(e==="terima"?g(o,"Diterima"):e==="tolak"?g(o,"Ditolak"):e==="hapus"&&h(o,x||"Santri"))})});
