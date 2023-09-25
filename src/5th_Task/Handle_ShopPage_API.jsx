// import React, { useState } from 'react'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


// export const Handle_ShopPage_API = ({ id, name, image1, image2, title, description }) => {
//     const [image, setimage] = useState(null)
//     const [nameTital, setnameTital] = useState(null)

//     function handleChangeImage(newImage) {
//         setimage(newImage)
//     }
//     function handleClick(name) {
//         setnameTital(name)
//     }

//     return (
//         <div key={id}>
//         <div className="col">
//             <div className="card h-100 border-info">
//                 <a href="" className='position-absolute text-info'><FavoriteBorderIcon /></a>

//                 <img
//                     data-bs-toggle='modal' data-bs-target='#myModal'
//                     src={image === image2 ? image2 : image1}
//                     onMouseEnter={() => handleChangeImage(image2)}
//                     onMouseOut={() => handleChangeImage(image1)}
//                     onClick={()=> handleClick(name)}
//                     className="card-img-top" alt="..." />

//                 <div id="myModal" className="modal fade">
//                     <div className='modal-dialog modal-dialog-centered modal-lg'>
//                         <div className='modal-content'>
//                             <div className='modal-header'>{nameTital}
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div className='modal-body p-3 d-flex flex-row'>
//                                 <img src={image} alt="" className='w-50 rounded' />
//                                 <div className='ms-3'>
//                                     <h5>{nameTital}</h5>
//                                     <p>{description}</p>
//                                 </div>
//                             </div>
//                                 <div class="modal-footer">
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                     <button type="button" className="btn btn-primary"><BusinessCenterIcon className='fs-4 pe-1'/> Add to cart</button>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text">{title}</p>
//                 </div>
//                 <div className='d-flex align-items-center mb-3'>
//                     <b className='ms-3 text-primary'>$320</b>
//                     <a href="#" className="btn btn-outline-primary mx-auto rounded me-3"><BusinessCenterIcon className='fs-4 pe-1' /> Add to cart</a>
//                 </div>
//                 <div className="card-footer">
//                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }
