<?php

namespace Tests\Todo\Unit\Console\Commands;

use Tests\TestCase;

/**
 * @see \App\Console\Commands\AutoBanDisposableUsers
 */
class AutoBanDisposableUsersTest extends TestCase
{
    /**
     * @test
     */
    public function it_runs_successfully(): void
    {
        $this->markTestIncomplete('This test case was generated by Shift. When you are ready, remove this line and complete this test case.');

        $this->artisan('auto:ban_disposable_users')
            ->expectsOutput('Automated User Banning Command Complete')
            ->assertExitCode(0)
            ->run();
    }
}
