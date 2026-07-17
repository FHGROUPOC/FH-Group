export function generateVCard() {
    const vCardData = `BEGIN:VCARD
  VERSION:3.0
  FN:Muhammad Gulzar Ahmed
  ORG:FH Group Of Companies
  TITLE:Managing Director
  TEL;TYPE=work,voice:+923224447077
  EMAIL:mkgulzar@fhgroupoc.com
  URL:https://www.fhgroupoc.com/
  ADR;TYPE=work:;;276-L Johar Town;Lahore;Punjab;5400;Pakistan
  END:VCARD`;
  
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "M.Gulzar Ahmed.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  