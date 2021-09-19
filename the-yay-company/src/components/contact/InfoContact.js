import React from 'react'

function InfoContact() {
    return (
        <div className="contactInfo">
            <span className="d-flex"><i class="fas fa-envelope"></i>hello@yay.com</span>
            <span><i class="fas fa-phone"></i>123 456 7890</span>
            <div>
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                    <span>123 Some Street</span>
                    <span>Somewhere</span>
                    <span>Some City</span>
                    <span>10000</span>
                </div>
            </div>
        </div>
    )
}

export default InfoContact
