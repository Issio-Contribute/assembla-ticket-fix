/**
 * @package Assembla Ticket Fix Chrome Extension
 * @author Yorick Phoenix <yorick@issio.net>
 * @copyright Copyright (c) 2024, Issio Solutions, Inc
 */

/*! Copyright (c) 2024, Issio Solutions, Inc */

/* eslint strict: ["error", "global"] */
'use strict';

// rewrite all the links in the search results

const form = document.getElementById('quick-search-form');

form.addEventListener('click',
	(evt) =>
	{
		const target = evt.target;

		if (target.tagName === 'SPAN')
		{
			const span = target.innerText;

			if (span[0] === '#')
			{
				const parts = span.split(' ');

				let ticket = parts[0].substring(1);

				if (ticket[0] === '-')
				{
					ticket = ticket.substring(1);
				}

				const link = target.closest('a');

				if (link)
				{
					let href = link.getAttribute('href');

					href = href.replace('/-/', '/' + ticket + '/');

					link.setAttribute('href', href);
				}
			}
		}
	}
);

// Re-write all the links on the page

const links = document.getElementsByTagName('a');

for (let i=0; i < links.length; i++)
{
    const link = links[i];

	let href = link.getAttribute('href');

	if (href &&
		href.indexOf('tickets/-/') !== -1)
	{
		const strongs = link.getElementsByTagName('strong');

		if (strongs.length > 0)
		{
			const ticket = strongs[0].innerText;

			href = href.replace('/-/', '/' + ticket + '/');

			link.setAttribute('href', href);
		}
	}
}
