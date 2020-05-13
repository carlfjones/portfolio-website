const hamburger_checkbox = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');
const nav_link = document.getElementsByClassName('navbar__link');
const sections = document.getElementsByClassName('section')

hamburger_checkbox.addEventListener('change', function() {
    navbar.classList.toggle('active');
})

function menuColorChanger() {
    for (let section of sections) {
        let section_boundary = section.getBoundingClientRect();
        for (let item of nav_link) {
            let item_boundary = item.getBoundingClientRect();

            if (item_boundary.y >= section_boundary.y && item_boundary.y + item_boundary.height <= section_boundary.y + section_boundary.height) {
                let color = section.dataset.color;

                switch (color) {
                    case 'light':
                        item.classList.add('light');
                        break;
                    case 'dark':
                        item.classList.remove('light');
                        break;
                }
            }
        }
    }
}

document.addEventListener('scroll', menuColorChanger);

