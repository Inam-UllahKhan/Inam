import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import StarIcon from '@mui/icons-material/Star';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Fifth_NavBar } from './Fifth_NavBar'
import Fifth_Json from './Fifth_Task_ShopPage_JSON.json';

export const Fifth_Task_ShopPage = () => {
    const [ApiData, setApiData] = useState([])
    const [value, setvalue] = useState('')
    const [sortValue, setsortValue] = useState('')
    const [image, setimage] = useState(null)
    const [nameTital, setnameTital] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [totalPages, setTotalPages] = useState(1); // Track the total number of pages
    const [sortedData, setSortedData] = useState([]); // Store the sorted data
    const [dataToDisplay, setdataToDisplay] = useState([])

    useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0)
        const getData = async (page) => {
            const itemsPerPage = 9;
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const unSortData = Fifth_Json;
            const dataToSlice = sortedData.length > 0 ? sortedData : unSortData;
            const data = await dataToSlice.slice(startIndex, endIndex);

            setApiData(data);
            setLoading(false);
            const Display = sortedData.length > 0 ? sortedData.slice(startIndex, endIndex) : unSortData.slice(startIndex, endIndex);
            setdataToDisplay(Display)
        };
        setTimeout(() => {
            getData(currentPage)
        }, 400);
        // Calculate the total number of pages
        const itemsPerPage = 9;
        const totalPages = Math.ceil(Fifth_Json.length / itemsPerPage);
        setTotalPages(totalPages);
        // ...
    }, [currentPage, sortedData]); // Fetch data whenever the page changes

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    function handleChangeImage(newImage) {
        setimage(newImage)
    }
    function handleClick(name) {
        setnameTital(name)
    }
    const handle_Submit = (e) => {
        e.preventDefault();
        const filteredProducts = value === '' ? Fifth_Json : Fifth_Json.filter((product) => {
            return product.name.toLowerCase().includes(value.toLowerCase())
        });
        setdataToDisplay(filteredProducts)
        setvalue('')
    }

    const handle_Inuput_Value = async (vlu) => {
        setsortValue('')
        const inpVlu = vlu.target.value;
        setvalue(inpVlu);
        const filteredProducts = inpVlu === '' ? ApiData : Fifth_Json.filter((product) => {
            return product.name.toLowerCase().startsWith(inpVlu.toLowerCase())
        });
        setdataToDisplay(filteredProducts)
    };
    const handle_Reset = () => {
        setsortValue('')
        setLoading(true)
        setTimeout(() => {
            setdataToDisplay(ApiData); // Reset filtered data to original data
            setvalue(''); // Clear the input value
            setCurrentPage(1)
            setSortedData('')
            setLoading(false)
        }, 400);
    };

    const handle_Sort = (e) => {
        const selectedSortOption = e.target.value;
        setsortValue(selectedSortOption);

        setCurrentPage(1)
        setLoading(true)
        setTimeout(() => {
            const sortedData = [...Fifth_Json];
            sortedData.sort((a, b) => {
                if (selectedSortOption === 'id') {
                    return a.id - b.id;
                } else if (selectedSortOption === 'name') {
                    return a.name.localeCompare(b.name);
                }
                else if (selectedSortOption === 'top') {
                    return b.reating - a.reating;
                } else {
                    // Handle other sorting options as needed
                    return 0;
                }
            });
            setSortedData(sortedData); // Update sortedData state
            setLoading(false)
        }, 200);
    }
    return (
        <div>
            <Fifth_NavBar />

            <form className="container d-flex mx-auto col-md-5 mb-1" onSubmit={handle_Submit}>
                <input className="form-control me-2" placeholder="Search" aria-label="Search" onChange={handle_Inuput_Value} value={value} />
                <Stack spacing={1} direction={'row'}>
                    <Button color='primary' style={{ textTransform: 'none' }} variant="outlined" type="submit">Search</Button>
                    <Button color='primary' style={{ textTransform: 'none' }} variant="contained" onClick={handle_Reset}>Reset</Button>
                </Stack>
            </form>
            <div className=' d-flex justify-content-between container-fluid'>
                <select onChange={handle_Sort}
                    value={sortValue}
                    className='ms-2'>
                    <option value="">Sort by</option>
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="top">Top</option>
                </select>
                <Stack spacing={1} direction={'row'}>
                    {/* Previous page button */}
                    <Button
                        color='primary'
                        style={{ textTransform: 'none' }}
                        variant="outlined"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </Button>

                    {/* Next page button */}
                    <Button
                        color='primary'
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        disabled={dataToDisplay.length < 9} // Disable if there are fewer than 6 items on the current page
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </Button>
                </Stack>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-2">
                {
                    loading ? <>
                        {Array.from({ length: 10 }).map((el, m) => {
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
                        : dataToDisplay.length === 0 ? (
                            <div className="col text-center">
                                <p>No products found</p>
                            </div>
                        ) :
                            dataToDisplay.map((curElm, index) => {
                                const { id, name, image1, image2, reating, title, description } = curElm;
                                return (
                                    <div key={id}>
                                        <div className="col">
                                            <div className="card h-100 border-info">
                                                <a href="" className='position-absolute text-info'><FavoriteBorderIcon /></a>

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
                                                                <img src={image} alt="" className='col-md-6 w-50 rounded' />
                                                                <div className='ms-3 col-md-6'>
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
            {/* Display the current page number and total pages */}
            <div className="ms-2">
                Page {currentPage} of {totalPages}
            </div>
            <Stack spacing={1} direction={'row'} className='justify-content-center container d-flex mt-2 mb-2'>
                {/* Previous page button */}
                <Button
                    color='primary'
                    style={{ textTransform: 'none' }}
                    variant="outlined"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </Button>

                {/* Next page button */}
                <Button
                    color='primary'
                    style={{ textTransform: 'none' }}
                    variant="contained"
                    disabled={dataToDisplay.length < 9} // Disable if there are fewer than 6 items on the current page
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </Button>
            </Stack>
        </div>
    )
}
