# assembla-ticket-fix

This fixes a bug with the assembla website's generation of links to tickets.

Since around October 2024 the links on the app.assembla.com web-site have been broken as they don't contain the ticket
number in seach results. There is, however, enough information in - or near - the `<a>` link that we can generate a
fixed link on the fly.

This is a chrome plugin that does that.

# Install

You need to install this as an unpacked extension in developer mode. Google is your friend, use it to find out how.
