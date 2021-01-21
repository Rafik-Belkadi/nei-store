import Document, { Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <html>
                <Head>
                    <title>PhotoMania Store</title>
                    <link rel="icon" href="/favicon.ico" />
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript">
                    </script>
                </body>
            </html>
        )
    }
}