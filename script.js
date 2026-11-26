// ===== VTC site script =====
// All event / fight data lives near the top. Edit here to update the site.

// ---------- EVENT DATA (edit this) ----------
// Each event needs: id, badge, number, date, venue, matchups (array of "A VS B"), and card sections.
const eventsData = [
    {
        id: 'aba007',
        badge: 'ABA',
        number: '007',
        date: 'Fri, Nov 27 · 2:30 PM EST',
        venue: 'Las Vegas, Nevada',
        poster: 'poster-aba007.jpg',
        matchups: [
            'Ctuckk VS Michael Chandler',
            'Lamar VS Vinny',
            'Jackmon VS jackson',
            'Cobra Boy VS Zac',
            'demo VS DICE',
            'Seth VS Tomato',
            'Ryan Garcia VS Oliveira',
            'Hipposquad VS BartGiggle',
            'Chino VS Nick Diaz #2',
            'xavi.27212 VS Dean',
            'Elliot VS PLIXY',
            'Ghost VS M_X'
        ],
        card: {
            'Main Event':    [{ wc: 'HW', title: true, a: 'Ctuckk', b: 'Michael Chandler' }],
            'Co-Main Event': [{ wc: 'MW', a: 'Lamar', b: 'Vinny' }],
            'Main Card': [
                { wc: 'MW', a: 'Jackmon', b: 'jackson' },
                { wc: 'LW', a: 'Cobra Boy', b: 'Zac' },
                { wc: 'MW', a: 'demo', b: 'DICE' },
                { wc: 'HW', a: 'Seth', b: 'Tomato' },
                { wc: 'LW', a: 'Ryan Garcia', b: 'Oliveira' }
            ],
            'Prelims': [
                { wc: 'MW', a: 'Hipposquad', b: 'BartGiggle' },
                { wc: 'MW', a: 'Chino', b: 'Nick Diaz #2' },
                { wc: 'HW', a: 'xavi.27212', b: 'Dean' },
                { wc: 'CW', a: 'Elliot', b: 'PLIXY' },
                { wc: 'HW', a: 'Ghost', b: 'M_X' }
            ]
        }
    },
    {
        id: 'aba008',
        badge: 'ABA',
        number: '008',
        date: 'TBD',
        venue: 'Venue TBD',
        matchups: ['TBD VS TBD'],
        card: {
            'Main Event':     [{ wc: 'TBD', a: 'TBD', b: 'TBD' }],
            'Co-Main Event':  [{ wc: 'TBD', a: 'TBD', b: 'TBD' }],
            'Main Card':      [{ wc: 'TBD', a: 'TBD', b: 'TBD' }],
            'Prelims':        [{ wc: 'TBD', a: 'TBD', b: 'TBD' }]
        }
    },
    {
        id: 'aba009',
        badge: 'ABA',
        number: '009',
        date: 'TBD',
        venue: 'Venue TBD',
        matchups: ['TBD VS TBD'],
        card: {
            'Main Event':     [{ wc: 'TBD', a: 'TBD', b: 'TBD' }],
            'Co-Main Event':  [{ wc: 'TBD', a: 'TBD', b: 'TBD' }],
            'Main Card':      [{ wc: 'TBD', a: 'TBD', b: 'TBD' }],
            'Prelims':        [{ wc: 'TBD', a: 'TBD', b: 'TBD' }]
        }
    }
];

// ---------- PAST EVENT RESULTS ----------
// w = winner, l = loser. m: 'dec' | 'ko' | 'draw' | 'forf' (no-show, counts as a decision win). verb is the Discord wording.
const pastEvents = [
    {
        id: 'aba006',
        title: 'ABA 006',
        badge: 'ABA',
        number: '006',
        date: 'Sat, Nov 21',
        venue: 'Final Results',
        awards: [
            { label: 'Performance of the Night', who: 'Cobra Boy' },
            { label: 'Fight of the Night', who: 'Cobra Boy & Ryan Garcia' }
        ],
        sections: [
            { name: 'PRELIMS', bouts: [
                { w: 'DICE',       wRec: '1-0-0', wNote: '(1 TKO)', l: 'PLIXY', lRec: '0-1-1', m: 'ko',  verb: "TKO's" },
                { w: 'Oliveira',   wRec: '2-4-0', l: 'Khabib', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Hipposquad', wRec: '1-1-1', wNote: '(1 TKO)', l: 'Chino', lRec: '0-2-0', m: 'ko', verb: "TKO's" },
                { w: 'BartGiggle', wRec: '1-2-0', l: 'Deuhhh', lRec: '0-1-0', m: 'dec', verb: 'beats' }
            ]},
            { name: 'MAIN CARD', bouts: [
                { w: 'Michael Chandler', wRec: '1-0-0', l: 'Expert', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'jackson',          wRec: '2-0-0', wNote: '(1 TKO)', l: 'demo', lRec: '3-2-0', m: 'ko', verb: "TKO's" }
            ]},
            { name: 'MAIN EVENT', bouts: [
                { w: 'Cobra Boy', wRec: '5-0-0', wNote: '(3 TKO)', l: 'Ryan Garcia', lRec: '2-1-0', m: 'ko', verb: "TKO's" }
            ]}
        ]
    },
    {
        id: 'aba005',
        title: 'ABA 005',
        badge: 'ABA',
        number: '005',
        date: 'Sun, Nov 15 · 2:30 PM EST',
        venue: 'Final Results',
        awards: [
            { label: 'Performance of the Night', who: 'Jaybocka' },
            { label: 'Fight of the Night', who: 'Vite & Africano' }
        ],
        sections: [
            { name: 'PRELIMS', bouts: [
                { w: 'Nick Diaz', wRec: '3-0-0', wNote: '(1 TKO)', l: 'BIG T', lRec: '0-1-0', m: 'ko', verb: "TKO's" },
                { w: 'Jackmon',   wRec: '2-0-0', wNote: '(2 TKO)', l: 'Sephtis', lRec: '2-1-0', m: 'ko', verb: "TKO's" },
                { w: 'jackson',   wRec: '1-0-0', l: 'xavi.27212', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'LeviTotf',  wRec: '1-1-0', l: 'Oliveira', lRec: '1-4-0', m: 'dec', verb: 'beats' }
            ]},
            { name: 'MAIN CARD', bouts: [
                { w: 'Max Bless',  wRec: '1-0-0', l: 'Seth', lRec: '1-2-0', m: 'dec', verb: 'beats' },
                // Draw: both fighters get a draw on their record (w / l are just the two fighters)
                { w: 'Hipposquad', wRec: '0-1-1', l: 'PLIXY', lRec: '0-1-1', m: 'draw', verb: 'draw with' },
                { w: 'demo', wRec: '3-1-0', wNote: '(1 TKO)', l: 'Grayson', lRec: '2-2-0', m: 'ko', verb: "TKO's" },
                { w: 'Jaybocka',   wRec: '1-0-0', wNote: '(1 TKO)', l: 'NAGI', lRec: '0-1-0', m: 'ko', verb: "TKO's" }
            ]},
            { name: 'MAIN EVENT', bouts: [
                { w: 'Vite', wRec: '1-1-0', wNote: '(1 TKO)', l: 'Africano', lRec: '0-1-0', m: 'ko', verb: "TKO's" }
            ]}
        ]
    },
    {
        id: 'aba004',
        title: 'ABA 004',
        badge: 'ABA',
        number: '004',
        date: 'Nov 2026',
        venue: 'Final Results',
        sections: [
            { name: 'PRELIMS', bouts: [
                { w: 'Dragon5000', wRec: '1-2-0', l: 'Omar Overdrive', lRec: '0-2-0', m: 'dec', verb: 'beats' },
                { w: 'Seth',       wRec: '1-1-0', l: 'Dean', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Cobra Boy',  wRec: '4-0-0', wNote: '(2 TKO)', l: 'baker', lRec: '0-1-0', m: 'ko', verb: "TKO's" }
                // Yuro vs BartGiggle: "outcome will be figured out after card", add it here once there is a result
            ]},
            { name: 'MAIN CARD', bouts: [
                { w: 'demo',   wRec: '2-1-0', l: 'Nick Diaz #2', lRec: '0-2-0', m: 'dec', verb: 'beats' },
                { w: 'Vinny',  wRec: '2-0-0', wNote: '(1 TKO)', l: 'InCore', lRec: '2-1-0', m: 'ko', verb: "TKO's" },
                { w: 'Zac',    wRec: '1-0-0', l: 'Oliveira', lRec: '1-3-0', m: 'dec', verb: 'beats' },
                { w: 'Ctuckk', wRec: '1-0-0', wNote: '(1 TKO)', l: 'Matt Tyson', lRec: '2-1-0', m: 'ko', verb: "TKO's" }
            ]},
            { name: 'MAIN EVENT', bouts: [
                { w: 'Ryan Garcia', wRec: '2-0-0', l: 'Grayson', lRec: '2-1-0', m: 'dec', verb: 'beats' }
            ]}
        ]
    },
    {
        id: 'aba003',
        title: 'ABA 003',
        badge: 'ABA',
        number: '003',
        date: 'Sun, Nov 1 · 2:30 PM EST',
        venue: 'Final Results',
        awards: [
            { label: 'Performance of the Night', who: 'Mystic' },
            { label: 'Fight of the Night', who: 'Sephtis & Bobcob' }
        ],
        sections: [
            { name: 'PRELIMS', bouts: [
                { w: 'Grayson',   wRec: '2-0-0', l: 'MacEm', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                // Two different fighters are both called Nick Diaz. The loser is "Nick Diaz #2" so their records stay separate.
                { w: 'Nick Diaz', wRec: '2-0-0', l: 'Nick Diaz #2', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Sephtis',   wRec: '2-0-0', l: 'Bobcob', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Mystic',    wRec: '2-0-0', wNote: '(1 TKO)', l: 'Omar Overdrive', lRec: '0-1-0', m: 'dec', verb: 'beats' }
            ]},
            { name: 'MAIN CARD', bouts: [
                { w: 'Matt Tyson', wRec: '2-0-0', wNote: '(1 TKO)', l: 'Remnant', lRec: '0-1-0', m: 'ko', verb: "TKO's" },
                { w: 'Vinny',      wRec: '1-0-0', l: 'demo', lRec: '1-1-0', m: 'dec', verb: 'beats' },
                { w: 'Cobra Boy',  wRec: '3-0-0', wNote: '(1 TKO)', l: 'Oliveira', lRec: '1-2-0', m: 'dec', verb: 'beats' }
            ]},
            { name: 'MAIN EVENT', bouts: [
                { w: 'Lamar', wRec: '2-0-0', l: 'Seth', lRec: '0-1-0', m: 'ko', verb: "TKO's" }
            ]}
        ]
    },
    {
        id: 'aba002',
        title: 'ABA 002',
        badge: 'ABA',
        number: '002',
        date: 'Sat, Oct 24 · 2:30 PM EST',
        venue: 'Final Results',
        sections: [
            { name: 'PRELIMS', bouts: [
                { w: 'demo',       wRec: '1-0-0', l: 'LeviTotf', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Matt Tyson', wRec: '1-0-0', l: 'Lockloader', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Grayson',    wRec: '1-0-0', l: 'the.nug.', lRec: '0-1-0', m: 'dec', verb: 'beats' }
            ]},
            { name: 'MAIN CARD', bouts: [
                { w: 'Oliveira', wRec: '1-1-0', l: 'BartGiggle', lRec: '0-2-0', m: 'dec', verb: 'beats' },
                { w: 'rigid',    wRec: '1-0-0', wNote: '(1 TKO)', l: 'Zatras', lRec: '0-2-0', m: 'ko', verb: "TKO's" },
                { w: 'Lamar',    wRec: '1-0-0', wNote: '(1 TKO)', l: 'Capertic', lRec: '1-1-0', m: 'ko', verb: "TKO's" }
            ]},
            { name: 'MAIN EVENT', bouts: [
                { w: 'Cobra Boy', wRec: '2-0-0', wNote: '(1 TKO)', l: 'Bluray', lRec: '1-1-0', m: 'ko', verb: "TKO's" }
            ]}
        ]
    },
    {
        id: 'aba001',
        title: 'ABA 001',
        badge: 'ABA',
        number: '001',
        date: 'Sat, Oct 17 · 2:30 PM EST',
        venue: 'Final Results',
        sections: [
            { name: 'PRELIMS', bouts: [
                { w: 'Nick Diaz', wRec: '1-0-0', l: 'BartGiggle', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Jackmon',   wRec: '1-0-0', wNote: '(1 KO)', l: 'Chino', lRec: '0-1-0', m: 'ko', verb: "TKO's" },
                { w: 'Mystic',    wRec: '1-0-0', wNote: '(1 KO)', l: 'Zatras', lRec: '0-1-0', m: 'ko', verb: "TKO's" },
                { w: 'InCore',    wRec: '1-0-0', l: 'Dragon5000', lRec: '0-1-0', m: 'dec', verb: 'beats' }
            ]},
            { name: 'MAIN CARD', bouts: [
                { w: 'Sephtis',   wRec: '1-0-0', l: 'Oliveira', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Capertic',  wRec: '1-0-0', l: 'Hipposquad', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Ryan Garcia', wRec: '1-0-0', l: 'Barty', lRec: '', lTag: 'CN', lBold: true, m: 'dec', verb: 'beats' }
            ]},
            { name: 'MAIN EVENT', bouts: [
                { w: 'Cobra Boy', wRec: '1-0-0', l: 'Flawless Boxing', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Bluray', wRec: '1-0-0', l: 'Vite', lRec: '0-1-0', m: 'forf', verb: 'wins by forfeit' }
            ]}
        ]
    }
];

// Display name: hides a trailing " #2" tag (used to keep two fighters with the same name apart)
function dn(n) { return String(n || '').replace(/\s*#\d+$/, ''); }

// ---------- FIGHT RESULTS (for roster / records) ----------
// Winner first. method: 'dec' | 'ko' | 'draw'
// Example: { ev: 'AMA 001', a: 'Winner Name', b: 'Loser Name', m: 'ko' }
const fights = [];
pastEvents.forEach(ev => ev.sections.forEach(sec => sec.bouts.forEach(b => {
    fights.push({ ev: ev.title, a: b.w, b: b.l, m: b.m });
})));

// Fighters on the roster who have not yet fought
const rosterExtras = [];

// Pre-league records (counts only). Example: 'Name': { dec: 1, loss: 1 }
const earlierRecords = {
    // Discord shows these records, but the earlier fights aren't on the site yet.
    // Replace with real fights once the results are known.
    'Dragon5000': { loss: 1 },
    'InCore':     { dec: 1 }
};

// Nicknames, shown under the name on the fighter profile
const nicknames = {
    'Cobra Boy':  'The Viper',
    'Zac':        'Gamine Rapide',
    'Matt Tyson': 'Peekaboo'
};

// Optional: force a photo filename when the auto-slug looks bad
// Example: 'Grayson “The Ragin Cajun”': 'grayson.png'
const fighterPics = {};

// ---------- TAB SWITCHING ----------
function switchTab(event, tabId) {
    document.querySelectorAll('video').forEach(v => v.pause());
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(c => {
        c.classList.remove('active');
        
    });

    const navBtns = document.querySelectorAll('.ufc-nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));

    if (tabId === 'upcoming' || tabId === 'past') {
        const eventsBtn = document.querySelector('.events-hover-btn');
        if (eventsBtn) eventsBtn.classList.add('active');
    } else if (event && event.target && event.target.classList.contains('ufc-nav-btn')) {
        event.target.classList.add('active');
    } else {
        const match = [...navBtns].find(b => (b.getAttribute('onclick') || '').includes(`'${tabId}'`));
        if (match) match.classList.add('active');
    }

    const target = document.getElementById(tabId);
    if (target) {
        target.classList.add('active');
        // force reflow then fade
        void target.offsetWidth;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- FIGHT CARD TOGGLE ----------
function toggleCardDetails(cardId, btnElement) {
    const card = document.getElementById(cardId);
    if (!card) return;
    card.classList.toggle('open');
    if (btnElement) {
        btnElement.textContent = card.classList.contains('open')
            ? 'HIDE CARD'
            : (btnElement.dataset.label || 'FIGHT CARD');
    }
}

// ---------- MATCHUP CAROUSEL ----------
const matchups = {};
const currentMatchupIndices = {};

eventsData.forEach(ev => {
    matchups[ev.id] = ev.matchups;
    currentMatchupIndices[ev.id] = 0;
});

const pastBouts = {};
pastEvents.forEach(ev => {
    // main event first, then main card, then prelims
    const bouts = [];
    [...ev.sections].reverse().forEach(sec => sec.bouts.forEach(b => bouts.push(b)));
    pastBouts[ev.id] = bouts;
    matchups[ev.id] = bouts.map(b => `${b.w} VS ${b.l}`);
    currentMatchupIndices[ev.id] = 0;
});

function resultText(eventId) {
    const b = pastBouts[eventId] && pastBouts[eventId][currentMatchupIndices[eventId]];
    if (!b) return '';
    if (b.m === 'draw') return `${dn(b.w)} drew with ${dn(b.l)} · Draw`;
    return `${dn(b.w)} def. ${dn(b.l)} · ${b.m === 'ko' ? 'KO' : b.m === 'forf' ? 'Forfeit' : 'Decision'}`;
}

function stepMatchup(eventId, dir) {
    const list = matchups[eventId];
    if (!list || !list.length) return;
    currentMatchupIndices[eventId] = (currentMatchupIndices[eventId] + dir + list.length) % list.length;
    const el = document.getElementById(`${eventId}-title`);
    if (el) {
        el.textContent = dn(list[currentMatchupIndices[eventId]]);
        el.classList.toggle('long', el.textContent.length > 22);
    }
    const rEl = document.getElementById(`${eventId}-result`);
    if (rEl) rEl.textContent = resultText(eventId);
    renderCarouselAvatars(eventId);
}
function nextMatchup(eventId) { stepMatchup(eventId, 1); }
function prevMatchup(eventId) { stepMatchup(eventId, -1); }

// ---------- LOGO ----------
(function () {
    const img = document.getElementById('site-logo');
    const fallback = document.getElementById('logo-fallback');
    if (!img || !fallback) return;
    const test = new Image();
    test.onload = () => { img.hidden = false; fallback.style.display = 'none'; };
    test.onerror = () => { /* keep SVG */ };
    test.src = img.getAttribute('src');
})();

// ---------- FIGHTER PHOTOS ----------
// Auto: "Nick Diaz" → nick-diaz.png. Override in fighterPics if needed.
function photoFor(name) {
    const n = (name || '').trim();
    if (!n || /^tbd$/i.test(n)) return null;
    if (fighterPics[n]) return fighterPics[n];
    const slug = n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return slug ? slug + '.png' : null;
}

function setAvatar(el, name) {
    if (!el) return;
    if (el.dataset.fallback === undefined) el.dataset.fallback = el.innerHTML;
    const src = photoFor(name);
    if (src) {
        el.innerHTML = '';
        const img = document.createElement('img');
        img.className = 'fighter-photo';
        img.src = src;
        img.alt = name;
        img.onerror = () => { el.innerHTML = el.dataset.fallback; };
        el.appendChild(img);
    } else {
        el.innerHTML = el.dataset.fallback;
    }
}

function renderCarouselAvatars(eventId) {
    const list = matchups[eventId];
    if (!list) return;
    const names = list[currentMatchupIndices[eventId]].split(/\s+vs\.?\s+/i);
    document.querySelectorAll(`.fighter-avatar[data-event="${eventId}"]`).forEach(el => {
        setAvatar(el, names[+el.dataset.slot] || 'TBD');
    });
}

function renderWatchAvatars() {
    // Watch tab always shows the first upcoming event's main matchup
    const first = eventsData[0];
    if (!first) return;
    document.querySelectorAll('.watch-fighter-img[data-main-event]').forEach(el => {
        const names = (matchups[first.id] || ['TBD VS TBD'])[0].split(/\s+vs\.?\s+/i);
        setAvatar(el, names[+el.dataset.slot] || 'TBD');
    });
}

// ---------- RENDER UPCOMING EVENTS ----------
function silhouetteSVG(fill) {
    return `<svg viewBox="0 0 100 120" width="100%" height="100%">
        <circle cx="50" cy="35" r="22" fill="${fill}"/>
        <path d="M 20 100 Q 50 60 80 100" fill="${fill}"/>
    </svg>`;
}

function renderEvents() {
    const container = document.querySelector('#upcoming .events-list-container');
    if (!container) return;
    container.innerHTML = '';

    if (!eventsData.length) {
        container.innerHTML = `
            <div class="info-card empty-state">
                <p>No upcoming events scheduled yet.</p>
                <p class="empty-sub">Join the Discord to hear about the next fight night first.</p>
            </div>`;
        return;
    }

    eventsData.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'ufc-event-card';

        const mainMatchup = (ev.matchups && ev.matchups[0]) || 'TBD VS TBD';
        const titleClass = mainMatchup.length > 22 ? 'bout-title long' : 'bout-title';

        let cardHtml = '';
        if (ev.card) {
            Object.entries(ev.card).forEach(([section, bouts]) => {
                cardHtml += `<h5 class="card-section">${section}</h5>`;
                bouts.forEach(b => {
                    cardHtml += `
                        <div class="bout-row">
                            <abbr class="wc" title="Weight class">${b.wc || 'TBD'}</abbr>
                            <span>${b.title ? '<small class="title-fight">Championship</small>' : ''}<b>${dn(b.a) || 'TBD'}</b><em>vs</em><b>${dn(b.b) || 'TBD'}</b></span>
                        </div>`;
                });
            });
        }

        card.innerHTML = `
            <div class="ufc-event-row">
                <div class="event-logo-col">
                    <div class="event-badge">
                        <svg class="badge-word" viewBox="0 0 120 56" role="img" aria-label="${ev.badge}">
                            <text x="0" y="52" textLength="118" lengthAdjust="spacingAndGlyphs">${ev.badge}</text>
                        </svg>
                        <div class="badge-sub-row">
                            <span class="badge-rule"></span>
                            <span class="badge-num">${ev.number}</span>
                        </div>
                    </div>
                </div>
                <div class="fighter-carousel-col">
                    <button class="arrow-btn" title="Previous Bout" onclick="prevMatchup('${ev.id}')" aria-label="Previous matchup">❮</button>
                    <div class="matchup-stage">
                        <div class="fighter-avatar f1" data-event="${ev.id}" data-slot="0">
                            ${silhouetteSVG('#d0d0d0')}
                        </div>
                        <div class="fighter-avatar f2" data-event="${ev.id}" data-slot="1">
                            ${silhouetteSVG('#bcbcbc')}
                        </div>
                    </div>
                    <button class="arrow-btn" title="Next Bout" onclick="nextMatchup('${ev.id}')" aria-label="Next matchup">❯</button>
                </div>
                <div class="event-info-col">
                    <h2 class="${titleClass}" id="${ev.id}-title">${mainMatchup}</h2>
                    <p class="event-date">${ev.date}</p>
                    <p class="event-venue">${ev.venue}</p>
                </div>
                <div class="event-actions-col">
                    <button class="action-btn-outline" onclick="switchTab(null, 'watch')">HOW TO WATCH</button>
                    <button class="action-btn-outline" data-label="FIGHT CARD"
                            onclick="toggleCardDetails('${ev.id}-fullcard', this)">FIGHT CARD</button>
                </div>
            </div>
            <div id="${ev.id}-fullcard" class="event-card-details">
                <div class="card-details-inner">
                    ${ev.poster ? `<img class="event-poster" src="${ev.poster}" alt="${ev.badge} ${ev.number} fight poster" loading="lazy">` : ''}
                    <h4>${ev.badge} ${ev.number} FULL FIGHT CARD</h4>
                    ${cardHtml}
                </div>
            </div>`;
        container.appendChild(card);
        renderCarouselAvatars(ev.id);
    });
}

// ---------- WATCH TAB (pulls first event) ----------
function updateHeroPoster() {
    const first = eventsData[0];
    const img = document.getElementById('hero-poster');
    const hero = document.querySelector('.featured-event');
    if (!img || !hero) return;
    if (first && first.poster) {
        img.src = first.poster;
        img.alt = `${first.badge} ${first.number} fight poster`;
        img.hidden = false;
        hero.classList.add('has-poster');
    }
}

function updateWatchTab() {
    const first = eventsData[0];
    if (!first) return;
    const title = document.querySelector('.watch-event-title');
    const meta  = document.querySelector('.watch-event-meta');
    const desc  = document.querySelector('.watch-event-desc');
    if (title) title.textContent = `${first.badge} ${first.number}`;
    if (meta)  meta.textContent  = first.date;
    if (desc)  desc.textContent  = `Don't miss a moment of ${first.badge} ${first.number}.`;
    // set data attribute so avatars know which event
    document.querySelectorAll('.watch-fighter-img').forEach(el => {
        el.dataset.mainEvent = first.id;
    });
    renderWatchAvatars();
}

// ---------- ROSTER ----------
function fighterStats(name) {
    const st = { dec: 0, ko: 0, draw: 0, loss: 0, history: [] };
    fights.forEach(f => {
        const label = f.m === 'dec' ? 'Decision' : f.m === 'ko' ? 'KO' : f.m === 'forf' ? 'Forfeit' : 'Draw';
        if (f.m === 'draw' && (f.a === name || f.b === name)) {
            st.draw++;
            st.history.push({ ev: f.ev, text: `Draw vs ${dn(f.a === name ? f.b : f.a)}` });
        } else if (f.a === name) {
            st[f.m === 'forf' ? 'dec' : f.m]++;
            st.history.push({ ev: f.ev, text: `Win (${label}) vs ${dn(f.b)}` });
        } else if (f.b === name) {
            st.loss++;
            st.history.push({ ev: f.ev, text: `Loss (${label}) vs ${dn(f.a)}` });
        }
    });
    const extra = earlierRecords[name];
    if (extra) {
        ['dec', 'ko', 'draw', 'loss'].forEach(k => { st[k] += extra[k] || 0; });
        const wins = (extra.dec || 0) + (extra.ko || 0);
        const bits = [];
        if (wins) bits.push(wins + (wins === 1 ? ' win' : ' wins'));
        if (extra.draw) bits.push(extra.draw + (extra.draw === 1 ? ' draw' : ' draws'));
        if (extra.loss) bits.push(extra.loss + (extra.loss === 1 ? ' loss' : ' losses'));
        st.history.unshift({ ev: 'Earlier', text: bits.join(', ') + ' (details not recorded)' });
    }
    return st;
}

function recordText(st) {
    return `${st.dec + st.ko}-${st.loss}-${st.draw}`;
}

function buildRoster() {
    const grid = document.getElementById('roster-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const names = new Set(rosterExtras);
    fights.forEach(f => { names.add(f.a); names.add(f.b); });

    const emptyBox = document.getElementById('roster-empty');
    const hint = document.getElementById('roster-hint');
    if (emptyBox) emptyBox.hidden = names.size > 0;
    if (hint) hint.hidden = names.size === 0;

    [...names].sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase())).forEach(name => {
        const st = fighterStats(name);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'roster-card';
        btn.setAttribute('aria-label', `View profile for ${dn(name)}`);

        const thumb = document.createElement('span');
        thumb.className = 'rc-photo';
        thumb.textContent = dn(name).replace(/[^A-Za-z0-9]/g, '').charAt(0).toUpperCase() || '?';

        const src = photoFor(name);
        if (src) {
            const img = new Image();
            img.alt = dn(name);
            img.onload = () => { thumb.textContent = ''; thumb.appendChild(img); };
            img.src = src;
        }

        const info = document.createElement('span');
        info.className = 'rc-info';
        const n = document.createElement('span');
        n.className = 'rc-name';
        n.textContent = dn(name);
        const t = document.createElement('span');
        t.className = 'rc-sub';
        t.textContent = recordText(st);
        info.append(n, t);
        btn.append(thumb, info);
        btn.onclick = () => openFighter(name);
        grid.appendChild(btn);
    });
}

function openFighter(name) {
    const st = fighterStats(name);
    document.getElementById('fm-name').textContent = dn(name);
    const nickEl = document.getElementById('fm-nick');
    if (nickEl) {
        nickEl.textContent = nicknames[name] ? `\u201C${nicknames[name]}\u201D` : '';
        nickEl.hidden = !nicknames[name];
    }
    document.getElementById('fm-total').textContent = 'Record: ' + recordText(st);
    document.getElementById('fm-dec').textContent = st.dec;
    document.getElementById('fm-ko').textContent = st.ko;
    document.getElementById('fm-draw').textContent = st.draw;
    document.getElementById('fm-loss').textContent = st.loss;

    const photo = document.getElementById('fm-photo');
    photo.innerHTML = '';
    photo.hidden = true;
    const psrc = photoFor(name);
    if (psrc) {
        const img = new Image();
        img.alt = dn(name);
        img.onload = () => { photo.appendChild(img); photo.hidden = false; };
        img.src = psrc;
    }

    const list = document.getElementById('fm-history');
    list.innerHTML = '';
    if (!st.history.length) {
        const li = document.createElement('li');
        li.textContent = 'No fights yet';
        list.appendChild(li);
    } else {
        st.history.forEach(h => {
            const li = document.createElement('li');
            const e = document.createElement('b');
            e.textContent = h.ev;
            li.append(e, ' ' + h.text);
            list.appendChild(li);
        });
    }

    const modal = document.getElementById('fighter-modal');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    // focus the close button for accessibility
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
}

function closeFighter() {
    document.getElementById('fighter-modal').hidden = true;
    document.body.style.overflow = '';
}

// ---------- INIT ----------
document.getElementById('fighter-modal')?.addEventListener('click', e => {
    if (e.target.id === 'fighter-modal') closeFighter();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeFighter();
});

// Ad video error handling
document.querySelectorAll('.ad-item video').forEach(v => {
    const sources = v.querySelectorAll('source');
    const last = sources[sources.length - 1];
    if (last) last.addEventListener('error', () => {
        const msg = v.closest('.ad-item')?.querySelector('.ad-error');
        if (msg) msg.hidden = false;
    });
    v.addEventListener('play', () => {
        document.querySelectorAll('.ad-item video').forEach(o => {
            if (o !== v) o.pause();
        });
    });
});

// ---------- PAST EVENTS (result cards) ----------
function renderPast() {
    const list = document.getElementById('past-list');
    const empty = document.getElementById('past-empty');
    if (!list) return;
    list.innerHTML = '';
    if (empty) empty.hidden = pastEvents.length > 0;

    pastEvents.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'ufc-event-card';
        const first = matchups[ev.id][0];
        const titleClass = first.length > 22 ? 'bout-title long' : 'bout-title';

        let cardHtml = '';
        [...ev.sections].reverse().forEach(sec => {
            const name = sec.name.replace(/\b\w/g, c => c).toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
            cardHtml += `<h5 class="card-section">${name}</h5>`;
            sec.bouts.forEach(b => {
                const label = b.m === 'ko' ? 'KO' : b.m === 'draw' ? 'Draw' : b.m === 'forf' ? 'Forfeit' : 'Decision';
                cardHtml += `
                    <div class="bout-row result-row">
                        <span><b>${dn(b.w)}</b><em>${b.m === 'draw' ? 'drew with' : 'def.'}</em><b>${dn(b.l)}</b></span>
                        <span class="method ${b.m}">${label}</span>
                    </div>`;
            });
        });

        if (ev.awards && ev.awards.length) {
            cardHtml += `<h5 class="card-section">Awards</h5>`;
            ev.awards.forEach(a => {
                cardHtml += `
                    <div class="bout-row result-row">
                        <span><b>${a.who}</b></span>
                        <span class="method award">${a.label}</span>
                    </div>`;
            });
        }

        card.innerHTML = `
            <div class="ufc-event-row">
                <div class="event-logo-col">
                    <div class="event-badge">
                        <svg class="badge-word" viewBox="0 0 120 56" role="img" aria-label="${ev.badge}">
                            <text x="0" y="52" textLength="118" lengthAdjust="spacingAndGlyphs">${ev.badge}</text>
                        </svg>
                        <div class="badge-sub-row">
                            <span class="badge-rule"></span>
                            <span class="badge-num">${ev.number}</span>
                        </div>
                    </div>
                </div>
                <div class="fighter-carousel-col">
                    <button class="arrow-btn" title="Previous Bout" onclick="prevMatchup('${ev.id}')" aria-label="Previous bout">❮</button>
                    <div class="matchup-stage">
                        <div class="fighter-avatar f1" data-event="${ev.id}" data-slot="0">${silhouetteSVG('#d0d0d0')}</div>
                        <div class="fighter-avatar f2" data-event="${ev.id}" data-slot="1">${silhouetteSVG('#bcbcbc')}</div>
                    </div>
                    <button class="arrow-btn" title="Next Bout" onclick="nextMatchup('${ev.id}')" aria-label="Next bout">❯</button>
                </div>
                <div class="event-info-col">
                    <h2 class="${titleClass}" id="${ev.id}-title">${dn(first)}</h2>
                    <p class="event-date">${ev.date}</p>
                    <p class="event-venue" id="${ev.id}-result">${resultText(ev.id)}</p>
                </div>
                <div class="event-actions-col">
                    <button class="action-btn-outline" data-label="RESULTS"
                            onclick="toggleCardDetails('${ev.id}-fullcard', this)">RESULTS</button>
                </div>
            </div>
            <div id="${ev.id}-fullcard" class="event-card-details">
                <div class="card-details-inner">
                    <h4>${ev.badge} ${ev.number} RESULTS</h4>
                    ${cardHtml}
                </div>
            </div>`;
        list.appendChild(card);
        renderCarouselAvatars(ev.id);
    });
}

// Boot
renderEvents();
renderPast();
updateWatchTab();
updateHeroPoster();

// ---------- RANKINGS ----------
// Edit this list after each card. Use the same fighter names as in the results above.
// Records are filled in automatically from the results.
const rankingsData = {
    p4p: ['Jaybocka', 'Vite', 'Cobra Boy', 'Nick Diaz', 'Mystic', 'Lamar', 'Vinny', 'Ctuckk', 'Jackmon', 'jackson'],
    divisions: [
        {
            name: 'Lightweight', champion: 'Vite', defenses: 0, photo: 'champ-vite.png',
            ranks: ['Cobra Boy', 'Mystic', 'Sephtis', 'InCore', 'Ryan Garcia', 'Zac', 'Bluray', 'Oliveira', 'LeviTotf', 'Flawless Boxing', 'Africano', 'Deuhhh', 'Khabib']
        },
        {
            name: 'Middleweight', champion: 'Jaybocka', defenses: 0, photo: 'champ-jaybocka.png',
            ranks: ['Nick Diaz', 'Lamar', 'Vinny', 'Jackmon', 'jackson', 'demo', 'Grayson', 'Hipposquad', 'DICE', 'Max Bless', 'BartGiggle', 'Dragon5000', 'NAGI', 'MacEm', 'PLIXY'],
            notRanked: ['Zatras', 'Nick Diaz #2', 'Chino']
        },
        {
            name: 'Heavyweight', champion: null, vacant: true,
            ranks: ['Matt Tyson', 'Ctuckk', 'Michael Chandler', 'Capertic', 'Seth', 'Expert', 'Lockloader', 'the.nug.', 'xavi.27212', 'Dean']
        }
    ]
};

const CHAMP_SILHOUETTE = '<svg viewBox="0 0 200 170" aria-hidden="true"><circle cx="112" cy="62" r="34" fill="#d0d0d0"/><path d="M30 170 Q40 112 112 104 Q184 112 194 170Z" fill="#d0d0d0"/><path d="M52 170 L84 118 L112 150 L140 118 L172 170Z" fill="#111"/><path d="M84 170 L96 140 L128 140 L140 170Z" fill="#e0a800"/></svg>';

function rankRow(n, key) {
    const li = document.createElement('li');
    li.className = 'rank-item rank-link';
    li.tabIndex = 0;
    li.setAttribute('role', 'button');
    const num = document.createElement('b');   num.textContent = n;
    const nm = document.createElement('span'); nm.textContent = dn(key);
    const rec = document.createElement('i');   rec.className = 'rank-rec'; rec.textContent = recordText(fighterStats(key));
    li.append(num, nm, rec);
    li.addEventListener('click', () => openFighter(key));
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFighter(key); } });
    return li;
}

function buildRankings() {
    const root = document.getElementById('rankings-root');
    if (!root) return;
    root.innerHTML = '';

    // Pound for pound
    const p4p = document.createElement('div');
    p4p.className = 'p4p-block';
    const top = rankingsData.p4p[0];
    p4p.innerHTML = `<div class="p4p-header"><p class="division-label">Pound for Pound</p><h3 class="champ-name"></h3><p class="champ-tag">#1 Pound-for-Pound</p></div>`;
    p4p.querySelector('.champ-name').textContent = top ? dn(top) : 'TBD';
    const p4pList = document.createElement('ol');
    p4pList.className = 'rank-list p4p-list';
    rankingsData.p4p.forEach((k, i) => p4pList.appendChild(rankRow(i + 1, k)));
    p4p.appendChild(p4pList);
    root.appendChild(p4p);

    // Divisions
    const grid = document.createElement('div');
    grid.className = 'divisions-grid';
    rankingsData.divisions.forEach(d => {
        const block = document.createElement('div');
        block.className = 'division-block';

        const label = document.createElement('p'); label.className = 'division-label'; label.textContent = d.name;
        const name = document.createElement('h3');  name.className = 'champ-name';
        name.textContent = d.champion ? dn(d.champion) : (d.vacant ? 'Vacant' : 'TBD');
        const tag = document.createElement('p');    tag.className = 'champ-tag'; tag.textContent = 'Champion';
        block.append(label, name, tag);

        if (d.champion) {
            const st = fighterStats(d.champion);
            const meta = document.createElement('p');
            meta.className = 'champ-meta';
            meta.textContent = `${recordText(st)} · ${st.ko} ${st.ko === 1 ? 'finish' : 'finishes'} · ${d.defenses || 0} title ${d.defenses === 1 ? 'defense' : 'defenses'}`;
            block.appendChild(meta);
        }

        const photo = document.createElement('div');
        photo.className = 'champ-photo';
        if (d.champion) {
            const img = new Image();
            img.alt = dn(d.champion);
            img.onload = () => { photo.innerHTML = ''; photo.classList.add('has-photo'); photo.appendChild(img); };
            img.src = d.photo || photoFor(d.champion);
        }
        photo.innerHTML = CHAMP_SILHOUETTE;
        block.appendChild(photo);

        const list = document.createElement('ol');
        list.className = 'rank-list';
        if (d.ranks.length) {
            d.ranks.forEach((k, i) => list.appendChild(rankRow(i + 1, k)));
        } else {
            for (let i = 1; i <= 15; i++) {
                const li = document.createElement('li');
                li.className = 'rank-item';
                li.innerHTML = `<b>${i}</b><span>TBD</span>`;
                list.appendChild(li);
            }
        }
        block.appendChild(list);

        if (d.notRanked && d.notRanked.length) {
            const nr = document.createElement('p'); nr.className = 'nr-label'; nr.textContent = 'Not ranked';
            const nrList = document.createElement('ul'); nrList.className = 'rank-list nr-list';
            d.notRanked.forEach(k => {
                const li = rankRow('NR', k);
                nrList.appendChild(li);
            });
            block.append(nr, nrList);
        }
        grid.appendChild(block);
    });
    root.appendChild(grid);
}

buildRoster();
buildRankings();