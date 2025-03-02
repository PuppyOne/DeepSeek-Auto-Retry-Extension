# DeepSeek Auto Retry Extension

Automatically retries when the DeepSeek web client is busy.

English | [简体中文](README-zh_CN.md)

## Features

Automatically retries requests when the DeepSeek web client shows "Server Busy" until the request is successful. This helps users to use DeepSeek services more smoothly during peak times.

## Environment

- Browser: Microsoft Edge

## Installation

1. Clone this repository.
2. Open Microsoft Edge, go to "Manage extensions" and enable **Developer mode**.
3. Load the unpacked extension and select the extension folder (the directory containing `manifest.json`).

## Notes

It does not retry requests that failed before entering the web page, only retrying newly failed requests after entering the web page.