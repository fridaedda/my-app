import React, { useContext } from "react";
import Header from "./Header";
import CartContext from "../context/cartContext";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Button,
  TableFooter,
} from "@material-ui/core/";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { products } from "../products";
import { useHistory, Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    width: 300,
    margin: "80px auto",
  },  
});

const Cart = () => {
  const history = useHistory();
  const { updateCartItem, removeCartItem, state } = useContext(CartContext);
  const classes = useStyles();

  let totalPrice = 0;

  const Product = (id, count) => {
    let product;
    product = products.find((product) => {
      return product.id === id ? product : null;
    });
    totalPrice += product.price * count;
    return (

<div className="table-head">

      <StyledTableRow key={product.name}>
      <StyledTableCell style={{width: '8%'}} component="th" scope="row">      
          <img
            src={product.image}
            style={{ height: 80 }}
            alt={product.image}
          ></img>
      <StyledTableCell align="left">{product.title}</StyledTableCell>     
        </StyledTableCell>        
        <StyledTableCell style={{width: '8%'}} className="inputfield" align="right">      
          <input className="inputfield"
            type="number"
            value={count}
            onChange={(e) => {
              let id = product.id;
              let count = parseInt(e.currentTarget.value);
              return count > 1
                ? updateCartItem({ id, count })
                : updateCartItem({ id, count: 1 });
            }}
          />
        
        <StyledTableCell  className="inputfield" style={{width: '1%'}} align="left">{product.price}</StyledTableCell>
        </StyledTableCell>
        <StyledTableCell style={{width: '10%'}} align="right">{count * product.price}</StyledTableCell>

        <StyledTableCell style={{width: '10%'}} align="right">
          <IconButton
            onClick={() => {
              removeCartItem(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
</div> 
    );
  }; 

  return ( 
    <div> 
      <Header />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">        
         <div>
                    <div>
                      <TableHead> 
                        <TableRow> 
                          <StyledTableCell style={{width: '10%'}} align="left">Produkter</StyledTableCell>
                          <StyledTableCell style={{width: '10%'}} align="left"></StyledTableCell>
                          <StyledTableCell style={{width: '40%'}} align="left">Antal och pris</StyledTableCell>
                          <StyledTableCell style={{width: '10%'}} align="left"></StyledTableCell>
                          <StyledTableCell style={{width: '5%'}} align="left">Totalpris</StyledTableCell>
                          <StyledTableCell style={{width: '10%'}} align="left">Ta bort</StyledTableCell>
                        </TableRow>
                      </TableHead>
                    </div>
                  <div>
                    <TableBody>  
                      {state.map((row) => Product(row.id, row.count))}
                    </TableBody>
                  </div>         

              <TableFooter>
                
              <TableRow>
                <StyledTableCell
                  colSpan={5}
                  align="right"
                  style={{ fontWeight: "bold" }}
                >
                  Totalpris : {totalPrice} kr
                </StyledTableCell>
              </TableRow>

              <TableRow>
                <StyledTableCell
                  colSpan={5}
                  align="right"
                  style={{ fontWeight: "bold" }}
                >

                  <Link to="/checkout">
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<CloudUploadIcon />}
                    >
                      Slutför köp
                  </Button>
                  </Link>
                </StyledTableCell>
              </TableRow>
              </TableFooter>
          </div>
          </Table>    
          </TableContainer>
    </div>
  );
};

export default Cart;
