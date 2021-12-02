import React, {useRef} from 'react'

interface FileUploadProps {
    setFile: Function
    accept: string
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, children, accept}) => {
    const inputRef = useRef<HTMLInputElement>()

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files[0])
    }

    return (
        <div onClick={() => inputRef.current.click()}>
            <input
                accept={accept}
                type="file"
                style={{display: 'none'}}
                ref={inputRef}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload