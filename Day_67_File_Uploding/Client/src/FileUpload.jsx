import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadedfile, setUploadedfile] = useState("");

    const onChange=(e)=>{
        setFile(e.target.file[0]);

    };
    const onSubmit=async()=>{
        e.preventDefault();
        const formData =new FormData
    }
  return (
    <div>

        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="file" onChange={onchange} />
                </div>
                <input type="submit" value="upload" />
            </form>
            {uploadedfile.url && (
                <div>
                    <h3>{uploadedfile.name}</h3>
                    <img src={uploadedfile.url} alt="" />

                </div>
            )}
        </div>
    </div>
  )
}

export default FileUpload