import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'

import { withRouter } from 'next/router'

import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '#0070f3',
		offWhite: '#f7f5f0',
		darkGrey: '#333333'
	}
}

/* debug to log how the store is being used */
export default (withRouter(
	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			return {
				pageProps: {
					// Call page-level getInitialProps
					...(Component.getInitialProps
						? await Component.getInitialProps(ctx)
						: {})
				}
			}
		}
		render() {
			const { Component, pageProps, router } = this.props
			return (
				<Container>
					<Head>
						<link href="/static/css/global-styles.css" rel="stylesheet" />
						<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
					</Head>
					<ThemeProvider theme={theme}>
						<Component router={router} {...pageProps} />
					</ThemeProvider>
				</Container>
			)
		}
	}
))

