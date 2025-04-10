import html2pdf from 'html2pdf.js';

export function downloadPDF(ref, filename = 'cv') {
  const opt = {
    margin: 0.5,
    filename: `${filename.replace(/\\s+/g, '_')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };
  html2pdf().set(opt).from(ref.current).save();
}