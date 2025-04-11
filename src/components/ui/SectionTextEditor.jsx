
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const SectionTextEditor = ({ value, onChange, placeholder, name, type = 'text', className }) => {
  return <ReactQuill name={name} theme="snow" value={value} onChange={onChange} />;
};

export default SectionTextEditor;