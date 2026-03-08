import { expect } from "@playwright/test";

export class Playground {
    constructor(page) {
        this.page = page;
        this.url = 'playground/'
        this.timerButton = page.getByTestId('timer-btn');
        this.timerStatus = page.getByTestId('timer-result');

        this.initialStatus = 'Waiting for click';
        this.processingStatus = 'Processing...';
        this.completeStatus = 'Complete';
    }
    async navigateTo() {
        await this.page.goto(this.url);
    }
    async clickTimerButton(buttonLoadTimeout = 7000) {

        await expect(this.timerStatus).toHaveText(this.initialStatus);
        await this.timerButton.click();
        await expect(this.timerStatus).toHaveText(this.processingStatus);
        await expect(this.timerStatus).toHaveText(this.completeStatus, {
            timeout: buttonLoadTimeout
        });
    }
}

module.exports = { Playground };
