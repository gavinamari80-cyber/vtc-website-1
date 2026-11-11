// ===== VTC site script =====
// All event / fight data lives near the top. Edit here to update the site.

// ---------- EVENT DATA (edit this) ----------
// Each event needs: id, badge, number, date, venue, matchups (array of "A VS B"), and card sections.
const eventsData = [
    {
        id: 'aba005',
        badge: 'ABA',
        number: '005',
        date: 'Sun, Nov 15 · 2:30 PM EST',
        venue: 'Abu Dhabi',
        matchups: [
            'TBD VS TBD',
            'Seth VS Kye',
            'BartGiggle VS Bash',
            'Dean VS jackson',
            'Oliveira VS KitoTotf'
        ],
        card: {
            'Main Event':     [{ wc: 'TBD', a: 'TBD', b: 'TBD' }],
            'Co-Main Event':  [{ wc: 'TBD', a: 'TBD', b: 'TBD' }],
            'Main Card': [
                { wc: 'TBD', a: 'TBD', b: 'TBD' },
                { wc: 'TBD', a: 'TBD', b: 'TBD' },
                { wc: 'TBD', a: 'TBD', b: 'TBD' },
                { wc: 'TBD', a: 'TBD', b: 'TBD' },
                { wc: 'TBD', a: 'TBD', b: 'TBD' }
            ],
            'Prelims': [
                { wc: 'MW', a: 'Seth', b: 'Kye' },
                { wc: 'CW', a: 'BartGiggle', b: 'Bash' },
                { wc: 'CW', a: 'Dean', b: 'jackson' },
                { wc: 'LW', a: 'Oliveira', b: 'KitoTotf' }
            ]
        }
    }
];

// ---------- PAST EVENT RESULTS ----------
// w = winner, l = loser. m: 'dec' | 'ko' | 'draw' | 'forf' (no-show, counts as a decision win). verb is the Discord wording.
const pastEvents = [
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
                { w: 'demo',       wRec: '1-0-0', l: 'KitoTotf', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Matt Tyson', wRec: '1-0-0', l: 'Lockloader', lRec: '0-1-0', m: 'dec', verb: 'beats' },
                { w: 'Grayson',    wRec: '1-0-0', l: 'Nugget', lRec: '0-1-0', m: 'dec', verb: 'beats' }
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
    return `${dn(b.w)} def. ${dn(b.l)} · ${b.m === 'ko' ? 'KO' : b.m === 'draw' ? 'Draw' : b.m === 'forf' ? 'Forfeit' : 'Decision'}`;
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
                            <span><b>${b.a || 'TBD'}</b><em>vs</em><b>${b.b || 'TBD'}</b></span>
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
                    <h4>${ev.badge} ${ev.number} FULL FIGHT CARD</h4>
                    ${cardHtml}
                </div>
            </div>`;
        container.appendChild(card);
        renderCarouselAvatars(ev.id);
    });
}

// ---------- WATCH TAB (pulls first event) ----------
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
                        <span><b>${dn(b.w)}</b><em>def.</em><b>${dn(b.l)}</b></span>
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
buildRoster();