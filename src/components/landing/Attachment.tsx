import React from 'react';

interface AttachmentProps {
    fileName: string;
    fileSize: string;
    onDownload: () => void;
}

const Attachment: React.FC<AttachmentProps> = ({ fileName, fileSize, onDownload }) => {
    return (
        <div className="attachment">
            <div className="attachment-info">
                <span className="attachment-name">{fileName}</span>
                <span className="attachment-size">{fileSize}</span>
            </div>
            <button className="attachment-download" onClick={onDownload}>
                Download
            </button>
        </div>
    );
};

export default Attachment;