import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, UserRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
// import { useHistory } from "react-router-dom";


export const login = async (dispatch, user) => {
    // const history = useHistory();
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);     
        dispatch(loginSuccess(res.data));
        // history.push('/');
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/products');     
        dispatch(getProductSuccess(res.data));
    } catch (error) {
        dispatch(getProductFailure());
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await UserRequest.delete(`/products/${id}`);     
        dispatch(deleteProductSuccess(res.data));
    } catch (error) {
        dispatch(deleteProductFailure());
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // const res = await UserRequest.delete(`/products/${id}`);     
        dispatch(updateProductSuccess({ id, product }));
    } catch (error) {
        dispatch(updateProductFailure());
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await UserRequest.post(`/products`, product);     
        dispatch(addProductSuccess(res.data));
    } catch (error) {
        dispatch(addProductFailure());
    }
}