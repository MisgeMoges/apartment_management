import nodemailer from 'nodemailer';

const sendEmail = async (options: any) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'miki11micah@gmail.com',
            pass: 'sowpnbjhimvwyoca',
        },
    });
    
    const mailOptions = {
        from: 'miki11micah@gmail.com',
        to: options.to,
        subject: options.subject,
        text: options.text,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
};

export default sendEmail;