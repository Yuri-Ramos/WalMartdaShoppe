import React from "react";
import { Grid, Card, Typography, CardContent, CardActions } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Gerencia = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/funcionario`;
        navigate(path);
      }
      const routeChange2 = () => {
        let path = `/cliente`;
        navigate(path);
      }
      const routeChange3 = () => {
        let path = `/categoria`;
        navigate(path);
      }
      const routeChange4 = () => {
        let path = `/produto`;
        navigate(path);
      }


    return(
        <div>    
            <Grid container spacing={4}>
                <Grid>
                    <Card>
                        <CardContent>
                            <Typography>
                                Funcionarios
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => routeChange()}>
                                Acessar
                            </Button>
                        </CardActions>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography>
                                Clientes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => routeChange2()}>
                                Acessar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid>     
                    <Card>
                        <CardContent>
                            <Typography>
                                Categorias
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => routeChange3()}>
                                Acessar
                            </Button>
                        </CardActions>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography>
                                Produtos
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => routeChange4()}>
                                Acessar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Gerencia;