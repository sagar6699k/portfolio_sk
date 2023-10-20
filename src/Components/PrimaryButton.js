import React from 'react'
import styled from 'styled-components';

function PrimaryButton({ title, resume }) {
    const handleDownloadAndPreview = () => {
        // Open the resume in a new tab
        const newTab = window.open(resume, '_blank');

        // Download the resume by creating an invisible anchor element
        const downloadLink = document.createElement('a');
        downloadLink.href = resume;
        downloadLink.download = 'SagarKurewar_fw11_034.pdf'; // Set the desired download filename
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

    };



    // return (
    //     <PrimaryButtonStyled href={resume} download>
    //         {title}
    //     </PrimaryButtonStyled>
    // )

    return (
        <PrimaryButtonStyled>
            <button className='download_btn' onClick={handleDownloadAndPreview}>{title}</button>
        </PrimaryButtonStyled>
    );
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;
export default PrimaryButton;
