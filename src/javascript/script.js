// 1. Project Card Hover Animation
function initProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.main-content-area, .secondary-content-area');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// 2. Typing Animation for Page Title
function typeWriterEffect() {
    const title = document.querySelector('h2');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid #333';
    
    let i = 0;
    function typeChar() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 1000);
        }
    }
    typeChar();
}

// 3. Project Status Badge Animation
function addStatusBadges() {
    const projects = document.querySelectorAll('.about-content p:first-child, .other-content p:first-child');
    
    projects.forEach(project => {
        const text = project.textContent;
        if (text.includes('In Progress')) {
            const badge = document.createElement('span');
            badge.textContent = '🚧 Active';
            badge.style.cssText = `
                background: linear-gradient(45deg, #ff6b6b, #ffa726);
                color: white;
                padding: 4px 8px;
                border-radius: 12px;
                font-size: 0.8em;
                margin-left: 10px;
                animation: pulse 2s infinite;
            `;
            project.appendChild(badge);
        } else if (text.includes('Completed')) {
            const badge = document.createElement('span');
            badge.textContent = '✅ Done';
            badge.style.cssText = `
                background: linear-gradient(45deg, #4caf50, #66bb6a);
                color: white;
                padding: 4px 8px;
                border-radius: 12px;
                font-size: 0.8em;
                margin-left: 10px;
            `;
            project.appendChild(badge);
        }
    });
    
    // Add pulse animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
}

// 4. Smooth Scroll Progress Indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
}

// 5. Interactive Technology Tags
function makeTechTagsInteractive() {
    const detailsLists = document.querySelectorAll('.details ul');
    
    detailsLists.forEach(list => {
        const techItem = Array.from(list.children).find(li => 
            li.textContent.includes('Technologies:')
        );
        
        if (techItem) {
            const techText = techItem.innerHTML;
            const technologies = techText.split(':')[1].split(',');
            
            let newHTML = '<strong>Technologies:</strong> ';
            technologies.forEach((tech, index) => {
                const cleanTech = tech.trim();
                if (cleanTech) {
                    newHTML += `<span class="tech-tag" style="
                        background: linear-gradient(45deg, #e3f2fd, #bbdefb);
                        color: #1565c0;
                        padding: 2px 6px;
                        border-radius: 8px;
                        margin: 2px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: inline-block;
                        font-size: 0.9em;
                        border: 1px solid #90caf9;
                    " onmouseover="this.style.transform='scale(1.1)'; this.style.background='linear-gradient(45deg, #2196f3, #1976d2)'; this.style.color='white';" 
                       onmouseout="this.style.transform='scale(1)'; this.style.background='linear-gradient(45deg, #e3f2fd, #bbdefb)'; this.style.color='#1565c0';">${cleanTech}</span>`;
                    if (index < technologies.length - 1) newHTML += ' ';
                }
            });
            
            techItem.innerHTML = newHTML;
        }
    });
}

// Initialize all functions when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initProjectHoverEffects();
    typeWriterEffect();
    addStatusBadges();
    addScrollProgress();
    makeTechTagsInteractive();
    
    // Add some CSS for better visual effects
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
        .main-content-area, .secondary-content-area {
            transition: all 0.3s ease;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
        }
        
        .tech-tag:hover {
            box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);
        }
        
        h2 {
            display: inline-block;
        }
    `;
    document.head.appendChild(additionalStyles);
});