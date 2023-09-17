import React from 'react';
import dynamic from 'next/dynamic';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});

const Editor = ({ handleChange, data }) => {
  return (
    <SunEditor
      setAllPlugins={true}
      onChange={handleChange}
      setContents={data}
      height='300px'
      setOptions={{
        buttonList: [
          [
            'undo',
            'redo',
            'bold',
            'underline',
            'italic',
            'strike',
            'list',
            'align',
            'fontSize',
            'formatBlock',
            'table',
            'fontColor',
            'font',
            'align',
            'table',
            'lineHeight',
            'link',
            'indent',
            'preview',
          ],
        ],
      }}
    />
  );
};

export default Editor;
