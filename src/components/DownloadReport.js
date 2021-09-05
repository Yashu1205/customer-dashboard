import React from 'react'
import html2pdf from 'html2pdf.js'

const DownloadReport = (props) => {
    
    const download = () => {
        const element = document.getElementById('app')
        const opt = {
            margin:       1,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
          };

        html2pdf().set(opt).from(element).save()
    }
    return (
        <button className="btn btn-primary btn-md " style={{float: 'right'}}
                onClick={download}>Download</button>
    )
}

export default DownloadReport