import{s as d}from"./supabase.DomExlJR.js";import"./AdminLayout.astro_astro_type_script_index_1_lang.DYrKiWId.js";function i(a){return new Date(a).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}const c=async()=>{const{data:{session:a}}=await d.auth.getSession();if(!a){window.location.replace("/admin/login");return}const t=document.getElementById("pesanTableBody"),s=document.getElementById("unreadBadge");if(!t)return;t.innerHTML='<tr><td colspan="4" class="text-center py-10 text-gray-500">Menyinkronkan...</td></tr>';const{data:n,error:r}=await d.from("pesan_masuk").select("*").order("created_at",{ascending:!1});if(r){t.innerHTML=`<tr><td colspan="4" class="py-10 text-center font-bold text-red-600 bg-red-50">Gagal memuat pesan: ${r.message}</td></tr>`;return}if(!n||n.length===0){t.innerHTML='<tr><td colspan="4" class="py-16 text-center text-gray-500 text-lg font-medium">Kotak masuk masih kosong.</td></tr>',s&&(s.textContent="0 Belum Dibaca");return}const o=n.filter(e=>!e.status_baca).length;s&&(s.textContent=`${o} Belum Dibaca`),t.innerHTML=n.map(e=>`
        <tr class="transition-colors duration-200 ${e.status_baca?"bg-white hover:bg-gray-50":"bg-blue-50/50 border-l-4 border-l-blue-500 hover:bg-blue-50"}">
          <td class="px-6 py-5 whitespace-nowrap text-sm ${e.status_baca?"text-gray-500":"text-blue-800 font-bold"}">
            ${i(e.created_at)}
          </td>
          <td class="px-6 py-5">
            <div class="text-base font-bold ${e.status_baca?"text-gray-900":"text-blue-900"} mb-1">${e.nama}</div>
            <div class="text-sm text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              ${e.kontak}
            </div>
          </td>
          <td class="px-6 py-5">
            <p class="text-sm ${e.status_baca?"text-gray-700":"text-gray-900 font-medium"} line-clamp-3 w-full max-w-xl pr-4">
              ${e.pesan.replace(/</g,"&lt;").replace(/>/g,"&gt;")}
            </p>
          </td>
          <td class="px-6 py-5 whitespace-nowrap text-center text-sm">
            <div class="flex flex-col items-center justify-center space-y-2">
              ${e.status_baca?'<span class="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-md w-full block">Telah Dibaca</span>':`<button data-action="baca" data-id="${e.id}" class="w-full text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md text-xs font-bold shadow-sm transition-colors">Tandai Dibaca</button>`}
              <button data-action="hapus" data-id="${e.id}" class="w-full text-red-600 hover:text-white bg-red-50 hover:bg-red-600 border border-red-200 hover:border-transparent px-3 py-1.5 rounded-md text-xs font-bold transition-colors">
                Hapus
              </button>
            </div>
          </td>
        </tr>
      `).join("")},l=async a=>{const{error:t}=await d.from("pesan_masuk").update({status_baca:!0}).eq("id",a);t||c()},u=async a=>{if(confirm("Hapus pesan ini secara permanen?")){const{error:t}=await d.from("pesan_masuk").delete().eq("id",a);t||c()}};document.addEventListener("DOMContentLoaded",()=>{c();const a=document.getElementById("btnRefreshMsg");a&&a.addEventListener("click",c);const t=document.getElementById("pesanTableBody");t&&t.addEventListener("click",s=>{const n=s.target.closest("button");if(!n)return;const r=n.getAttribute("data-action"),o=n.getAttribute("data-id");o&&(r==="baca"&&l(o),r==="hapus"&&u(o))})});
