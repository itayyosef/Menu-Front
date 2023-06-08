import React from 'react'
import axios from 'axios'
import { API_URL } from '../config'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Card, CardMedia, CardContent, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Grid} from '@mui/material'


function Menu({categories}) {
    const drawerWidth = 280;
    const [dishes,setDishes] = React.useState([])
    const navigate = useNavigate()
    const params = useParams()

    React.useEffect(() => {
        if(params.id === undefined) {
            getDishes()
        } else {
            filterByCategory(params.id)
        }
    },[params.id])

    function getDishes() {
        axios.get(`${API_URL}/dishes`).then(response => {
            setDishes(response.data)
        })
    }
    function filterByCategory(category_id) {
        axios.get(`${API_URL}/dishes?category_id=${category_id}`).then(response => {
            setDishes(response.data)
        })
    }
    return (
        <div className="App">
            <Box sx={{display:'flex'}}>
                <CssBaseline />
                <AppBar color="inherit" position="fixed"
                    sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Button variant="">
                            <Link to="/" style={{textDecoration:'none',color:'black'}}>
                                <span style={{fontSize:'30px',paddingTop:'10px'}}>{"＜ "}</span>
                                <span style={{padding:'5px'}}>Back</span>
                            </Link>
                        </Button>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' ,marginRight:'80px' }}>TAKE OUT</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ display: 'flex' }}>
            <Drawer 
                variant="permanent" 
                anchor="left" 
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { 
                        width: drawerWidth, 
                        boxSizing: 'border-box',
                    },
                }}
            > 
            <Toolbar>All Categories</Toolbar>
            <Divider />
            <List sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',height: '100%',justifyContent: 'center'}}>
                <div style={{fontWeight:"bold",fontSize:"17px"}}>
                    {'Jump Between Categories'.toUpperCase()}
                </div>
                { categories.map((category) => (
                    <ListItem key={category.id} disablePadding>
                        <ListItemButton 
                            onClick={()=>navigate(`/category/${category.id}`)} 
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: params.id == category.id ? 'red' : 'inherit',
                            }}
                        >
                            <Box>
                                <img
                                    src={category.image_url} 
                                    alt={category.category_name} 
                                    style={{width:125,height:47,borderRadius:'20%'}}
                                />
                                <ListItemText 
                                    primary={
                                        <Typography 
                                            variant="body1" 
                                            component="div"
                                            sx={{
                                                textAlign: 'center',
                                                marginTop: '4px',
                                                mb :"3px",
                                                fontWeight: params.id == category.id ? 'bold' : 'normal'
                                            }}>
                                            {category.category_name}
                                        </Typography>
                                    }
                                />
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
                </Drawer>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                <div>
                    {dishes.length > 0 && (
                        <Typography variant="h4" component="div" sx={{marginBottom:2,textAlign:"center"}}>
                            <div style={{fontWeight:"bold"}}>
                                {dishes[0].category.toUpperCase()}
                            </div>
                        </Typography>
                    )}
                </div>
                <Grid container spacing={1}>
                    {dishes.map((dish,index) => (
                        <>
                        <Grid item key={dish.id} xs={12} sm={5.9}>
                            <Card style={{ border: "none", boxShadow: "none" ,height:440}}>
                                <CardMedia
                                sx={{height:240}}
                                image={dish.imageURL}
                                title={dish.dish_name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
                                        <div style={{fontWeight:"bold"}}>
                                            {dish.dish_name}
                                        </div>
                                    </Typography>
                                    <Typography cariant="body2" color="text.secondary">
                                        {dish.description}
                                    </Typography>
                                </CardContent>
                                <Typography sx={{textAlign:"center",fontWeight:'bold'}}>
                                    {dish.price} ₪
                                </Typography>
                                <Divider sx={{margin:'16px 0'}}/>
                            </Card>
                        </Grid>
                        {index !== dishes.length - 1 && (
                            <Grid item>
                                <Divider variant="middle" orientation='vertical'/>
                            </Grid>
                            )}
                        </>
                    ))}
                </Grid>
            </Box>
        </Box>
        </div>
    )
}

export default Menu