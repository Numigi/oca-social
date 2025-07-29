# © Numigi (tm) and all its contributors (https://numigi.com/r/home)
# # License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "Mail full expand",
    "summary": "Expand mail in a big window",
    "version": "16.0.1.0.0",
    "category": "Social Network",
    "website": "https://numigi.com/r/home",
    "author": "Numigi, Odoo Community Association (OCA)",
    "maintainer": "Numigi",
    "license": "AGPL-3",
    "application": False,
    "installable": True,
    "depends": ["mail", "web"],
    "data": ["views/mail_full_expand.xml"],
    "assets": {
        "web.assets_backend": [
            "mail_full_expand/static/src/components/message/mail_full_expand.js",
            "mail_full_expand/static/src/components/message/mail_full_expand.scss",
            "mail_full_expand/static/src/components/message/mail_full_expand.xml",
        ],
    },
}
