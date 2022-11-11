import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import { BsPersonFill } from 'react-icons/bs'
import { MdEmail }  from 'react-icons/md'

import './Modal.css'

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <div className='modalRight'>
            <span className='closeBtn' onClick={onClose}>
              <RiCloseCircleFill />
            </span>
            <div className='content'>
              <h3>Profile editing</h3>
              <form>
                <div className="profile-editing">
                    <BsPersonFill className='icons' />
                    <input type="text" className='modal-input' placeholder='Name'/>
                </div>
                <div className="profile-editing">
                    <MdEmail className='icons' />
                    <input className='modal-input' type="text" placeholder='email'/>
                </div>
                <div className="modal-btn">
                    <button>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;