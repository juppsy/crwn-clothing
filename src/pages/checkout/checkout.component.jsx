import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	CheckoutBlockContainer,
	TotalContainer,
	WarningContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<CheckoutBlockContainer>
				<span>Product</span>
			</CheckoutBlockContainer>
			<CheckoutBlockContainer>
				<span>Description</span>
			</CheckoutBlockContainer>
			<CheckoutBlockContainer>
				<span>Quantity</span>
			</CheckoutBlockContainer>
			<CheckoutBlockContainer>
				<span>Price</span>
			</CheckoutBlockContainer>
			<CheckoutBlockContainer>
				<span>Remove</span>
			</CheckoutBlockContainer>
		</CheckoutHeaderContainer>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<TotalContainer>
			<span>TOTAL: ${total}</span>
		</TotalContainer>
		<WarningContainer>
			*Please use the following credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
		</WarningContainer>
		<StripeCheckoutButton price={total} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
