import { useEffect } from 'react';
import $ from 'jquery';

const AddField = ({ handleAddField }) => {
  useEffect(() => {
    $('#addButton').click(() => {
      handleAddField();
    });
  }, [handleAddField]);

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary form-control" id="addButton">
        Tambah Barang
      </button>
    </div>
  );
};

export default AddField;
