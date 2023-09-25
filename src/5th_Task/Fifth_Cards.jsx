import React, { useEffect, useState } from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Fifth_Json from './Fifth_Task_ShopPage_JSON.json';




export const Fifth_Cards = () => {
    const [ApiData, setApiData] = useState([]);
    const [image, setimage] = useState(null);
    const [nameTital, setnameTital] = useState(null)
    const [loading, setLoading] = useState(true)

    function handleChangeImage(newImage) {
        setimage(newImage)
    }
    function handleClick(name) {
        setnameTital(name)
    }

    const getData = async () => {
        const data = await Fifth_Json.slice(0, 6);
        setApiData(data)
        setLoading(false)
    }

    useEffect(() => {
        setInterval(() => {
            getData();
        }, 1000);
    }, [])

    return (
        <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 mt-5">
            {
                loading ? <>
                    {Array.from({ length: 6 }).map((el, m) => {
                        return (
                            <div key={m} className='col'>
                                <div className="card border-0">
                                    <Skeleton height={150} />
                                    <Skeleton height={30} />
                                    <Skeleton height={15} count={3} />
                                    <Skeleton height={30} />
                                    <Skeleton height={50} />
                                </div>
                            </div>
                        )
                    })}
                </>
                    : ApiData.map((curElm, index) => {
                        const { id, name, image1, image2, reating, title, description } = curElm;
                        return (
                            <div key={id}>
                                <div className="col">
                                    <div className="card h-100 border-info">
                                        <a href="#" className='position-absolute text-info'><FavoriteBorderIcon /></a>

                                        <img
                                            data-bs-toggle='modal' data-bs-target='#myModal'
                                            src={image === image2 ? image2 : image1}
                                            onMouseEnter={() => handleChangeImage(image2)}
                                            onMouseOut={() => handleChangeImage(image1)}
                                            onClick={() => handleClick(name)}
                                            className="card-img-top" alt="..." />

                                        <div id="myModal" className="modal fade">
                                            <div className='modal-dialog modal-dialog-centered modal-lg'>
                                                <div className='modal-content'>
                                                    <div className='modal-header text-primary'>{nameTital}
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className='modal-body p-3 d-flex flex-md-row flex-column'>
                                                        <img src={image} alt="" className='w-50 rounded' />
                                                        <div className='ms-3'>
                                                            <h5 className='text-primary'>{nameTital}</h5>
                                                            <p>{description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <Stack spacing={1} direction={'row'}>
                                                            <Button data-bs-dismiss="modal" color='inherit' variant='contained' style={{ textTransform: 'none' }}>Close</Button>
                                                            <Button color='primary' style={{ textTransform: 'none' }} variant="contained" startIcon={<BusinessCenterIcon className='fs-6' />} >Add to cart</Button>
                                                        </Stack>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='text-warning mt-2'>
                                            {Array.from({ length: reating }).map((_, i) => {
                                                return (
                                                    <React.Fragment key={i}><StarIcon fontSize='small' /></React.Fragment>
                                                )
                                            })}
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title text-primary">{name}</h5>
                                            <p className="card-text">{title}</p>
                                        </div>
                                        <div className='d-flex align-items-center mb-3'>
                                            <b className='ms-3 text-primary'>$320</b>
                                            <Button size='small' style={{ textTransform: 'none' }} variant="outlined" startIcon={<BusinessCenterIcon className='fs-6' />} className='mx-auto me-3 text-primary px-2 py-2'>Add to cart</Button>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }

        </div>
    )
}
