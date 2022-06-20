import { ChangeEvent, useState } from "react";

export const Upload = () => {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleUploadFile = (evento: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = evento;

    if (files) {
      const nome = files[0].name;
      setUploadedFileName(nome);
    }
  };

  return (
    <div>
      <label htmlFor="upload-file">Upload File</label>

      <input
        data-testid="input-upload"
        id="upload-file"
        name="upload-file"
        onChange={handleUploadFile}
        type="file"
      />

      {uploadedFileName && (
        <div data-testid="nome-arquivo">{uploadedFileName}</div>
      )}
    </div>
  );
};
