import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ImgsService from '../services/imgs.service';
import FileService from '../services/file.service';

import { Img } from '../models/img';

export default function AddImgPage() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      // upload the file
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log('Upload Progress: ', progress);
      });

      // save the img to firebase
      await ImgsService.createImg(new Img({
        id: null,
        name: name,
        downloadUrl: downloadUrl,
      }));

      navigate('/');
    } catch (err) {
      // setError(err.message);
    }

  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className='container my-4'>
      <div className='card card-body'>

        <h1>Add Img</h1>

        <form onSubmit={onFormSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Img Cover Image
            </label>
            <input
              onChange={onFileSelected}
              type="file"
              className="form-control"
              multiple
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Img Description
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>

          <div className='text-center'>
            <button className='btn btn-primary px-5'>
              Add Img
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}


