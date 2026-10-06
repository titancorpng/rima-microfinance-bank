import mammoth from 'mammoth';
const result = await mammoth.extractRawText({ path: 'data/Rima_Website_Content_and_App_Submission_Pack-dcf5ad.docx' });
console.log(result.value);
