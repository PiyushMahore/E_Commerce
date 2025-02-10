import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "your-email@gmail.com",
        clientId: "YOUR_CLIENT_ID",
        clientSecret: "YOUR_CLIENT_SECRET",
        refreshToken: "YOUR_REFRESH_TOKEN",
    },
});

const sendOrderConfirmation = async (order) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: order.email,
        subject: "Order Confirmation - Your Order is Confirmed!",
        html: `
            <h2>Thank You for Your Order, ${order.customerName}!</h2>
            <p>Your order has been successfully confirmed. Below are the details:</p>
            <hr>
            <h3>Order Details:</h3>
            <p><strong>Product:</strong> ${order.productName}</p>
            <p><strong>Quantity:</strong> ${order.quantity}</p>
            <p><strong>Price:</strong> $${order.price}</p>
            <hr>
            <h3>Shipping Details:</h3>
            <p><strong>Address:</strong> ${order.address}</p>
            <p><strong>City:</strong> ${order.city}</p>
            <p><strong>Zip Code:</strong> ${order.zipcode}</p>
            <hr>
            <p><strong>Total Amount:</strong> $${(order.quantity * order.price)}</p>
            <p>Your order will be shipped soon. We will notify you once it is dispatched.</p>
            <br>
            <p>Thanks for shopping with us!</p>
            <p><strong>E-Commerce Team</strong></p>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

export { sendOrderConfirmation };
