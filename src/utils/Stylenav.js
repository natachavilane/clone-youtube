// export function getNavLinkClass({ isActive }) {
//   return `
//     rounded-lg ${isActive ? 
//     "bg-[#D9D9D9] font-semibold text-[#0F0F0F]" 
//     : "hover:bg-[#D9D9D9]"
//   }`;
// }
// src/utils/Stylenav.js
export function getNavLinkClass({ isActive }) {
  return `
    flex items-center gap-4 text-sm  rounded-lg
    ${
      isActive
        ? "bg-[#f2f2f2]  hover:bg-[#f2f2f2] font-semibold text-[#0F0F0F]"
        : "hover:bg-[#f2f2f2]"
    }
  `;
}

// ici on a une fonction pour inverser le menu et le label nos avons creer un fontion
// qui prend reverse en argument si reverse faut true le flex-row-reverse s'apllique
// si faut false le flex-row s'apllique.
export function ChangerLordreMenu(reverse) {
  return reverse
    ? "flex flex-col lg:flex-row-reverse items-center gap-1 py-2"
    : "flex flex-col lg:flex-row items-center gap-1 lg:gap-4 py-2";
}