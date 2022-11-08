import React from 'react';
import { Grid, Card, Typography, CardContent, CardActions } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useStyles from './styles';


export const Gerenciamento = () => {
    const classes = useStyles();
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
        <div >    
            <Grid container spacing={4} className={classes.geral}>
                <Card className={classes.root}>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            Funcionarios
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button onClick={() => routeChange()}>
                            Acessar
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            Clientes
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button onClick={() => routeChange2()}>
                            Acessar
                        </Button>
                    </CardActions>
                </Card>   
                <Card className={classes.root}>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            Categorias
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button onClick={() => routeChange3()}>
                            Acessar
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            Produtos
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button onClick={() => routeChange4()}>
                            Acessar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
};
    